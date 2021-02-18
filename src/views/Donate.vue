<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h3>Donate To GraceWay Radio</h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="10">
        <v-tabs
          v-model="tab"
          fixed-tabs
          background-color="blue darken-4"
          dark
          slider-color="yellow"
          slider-size="4"
          active-class="active_tab"
        >
          <v-tab
            v-for="c in choices"
            :key="c.name"
            grow
          >
            {{c.name}}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="c in choices"
        :key="c.name"
      >
        <v-row justify="center">
          <v-col
            align="center"
            sm="7"
            lg="5"
            md="5"
          >
            <v-card>
              <v-list dense>
                <v-subheader>Donation Options - Please Select One</v-subheader>
                <v-divider
                  class="ma-0"
                  inset
                ></v-divider>
                <v-list-item-group

                >
                  <v-list-item
                    v-for="item in c.options"
                    :key="item.price"
                    :active="isSelected(item.price)"
                  >
                    <v-list-item-icon>
                      <v-icon
                        class="mr-2"
                        v-if="item.mode==='payment'"
                      >mdi-credit-card-check-outline</v-icon>
                      <v-icon
                        v-else
                        class="mr-2"
                      >mdi-credit-card-clock-outline</v-icon>
                      <v-list-item-content>
                        <v-list-item-title>${{item.value}} {{item.frequency}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item-icon>
                    <v-spacer></v-spacer>
                    <v-divider></v-divider>
                    <v-spacer> </v-spacer>
                    <v-checkbox
                      :value="isSelected(item.price)"
                      @click="toggleSelected(item)"
                    >
                    </v-checkbox>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
    <stripe-checkout
      ref="checkoutRef"
      :mode="cheeseburger"
      :pk="publishableKey"
      :line-items="selected"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <v-row class="justify-center align-center mt-n3">
      <v-col
        sm="7"
        lg="5"
        md="5"
      >
        <v-btn
          class="mt-4"
          block
          :disabled="!selectedLineItem"
          @click="submit"
          :dark="!!selectedLineItem"
          color="blue"
        >Donate</v-btn>
      </v-col>
    </v-row>

    <p class="text-center text-weak">Your tax deductible donation
      will be handled securely by Stripe Checkout.</p>
    <p class="text-center text-weak">You will be redirected after the transaction.</p>
  </v-container>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  name: 'Donate',
  components: {
    StripeCheckout,
  },
  data: () => ({
    publishableKey: 'pk_live_rgO4Hlt3GXvvxcZ2K3k8THzV',
    tab: null,
    selected: [],
    selectedLineItem: null,
    loading: false,
    max: 1,
    cheeseburger: 'payment',
    choices: [
      {
        name: 'One Time',
        options: [
          {
            price: 'price_1HzWmIDgTT4Ywrr9BnTKEU0k',
            value: 10,
            quantity: 1,
            frequency: 'One-Time',
            mode: 'payment',
          },
          {
            price: 'price_1HzWmIDgTT4Ywrr98bJehBdg',
            value: 20,
            quantity: 1,
            frequency: 'One-Time',
            mode: 'payment',
          },
          {
            price: 'price_1HzWmIDgTT4Ywrr9MPhFJ2Nj',
            value: 50,
            quantity: 1,
            frequency: 'One-Time',
            mode: 'payment',
          },
          {
            price: 'price_1IBijzDgTT4Ywrr967oDZz9A',
            value: 100,
            quantity: 1,
            frequency: 'One-Time',
            mode: 'payment',
          },
        ],
      },
      {
        name: 'Recurring',
        options: [
          {
            price: 'price_1HzWnbDgTT4Ywrr9pIpLyrtP',
            value: 10,
            quantity: 1,
            frequency: 'Monthly',
            mode: 'subscription',
          },
          {
            price: 'price_1ILf5WDgTT4Ywrr9k2aFYQSa',
            value: 20,
            quantity: 1,
            frequency: 'Monthly',
            mode: 'subscription',
          },
          {
            price: 'price_1ILf5WDgTT4Ywrr99bzeB3Yl',
            value: 50,
            quantity: 1,
            frequency: 'Monthly',
            mode: 'subscription',
          },
          {
            price: 'price_1ILf5WDgTT4Ywrr9k3eO1tmv',
            value: 100,
            quantity: 1,
            frequency: 'Monthly',
            mode: 'subscription',
          },
          {
            price: 'price_1ILf7iDgTT4Ywrr9SqOfGVyG',
            value: 100,
            quantity: 1,
            frequency: 'Yearly',
            mode: 'subscription',
          },
        ],
      },
    ],

    successURL: 'https://www.gracewayradio.com/success',
    cancelURL: 'https://www.gracewayradio.com/cancel',
  }),
  methods: {
    toggleSelected(lineItemObject) {
      if (this.selectedLineItem?.price === lineItemObject.price) {
        this.selectedLineItem = null;
        this.selected = [];
      } else {
        this.selectedLineItem = lineItemObject;
        this.cheeseburger = this.selectedLineItem.mode;
        this.selected = [];
        this.selected.push({
          price: lineItemObject.price,
          quantity: lineItemObject.quantity,
        });
      }
    },
    isSelected(priceHash) {
      return (
        !!this.selectedLineItem && this.selectedLineItem.price === priceHash
      );
    },
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  computed: {
    deSelectCheckbox() {
      if (
        // eslint-disable-next-line operator-linebreak
        this.selected.length >= this.max &&
        this.selected.includes(this.lineItems.price)
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.active_tab {
  font-size: 1.1em;
  transition: all 0.2s linear;

  &:active {
    transform: scale(1.2);
  }
}
.v-list-item:hover:not(v-list-item--active) {
  border-left: 4px solid darkblue;
  background-clip: padding-box;
  background-color: rgba(144, 202, 249, 0.5);
}
</style>
