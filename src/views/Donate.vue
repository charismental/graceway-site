<template>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h3>Donate To GraceWay Radio</h3>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="center" :cols="$vuetify.breakpoint.smAndDown ? '11' : '4'">
          <v-card>
            <v-list dense>
              <v-subheader>Donation Options</v-subheader>
              <v-list-item-group v-model="max" color="primary">
              <v-list-item
              v-for="l in lineItems"
              :key="l.price"
              :active="isSelected(l.price)"
              >
                <v-list-item-icon>
                  <v-icon class="mr-2">mdi-cash</v-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="l.value"></v-list-item-title>
                </v-list-item-content>
                </v-list-item-icon>
                <v-spacer> </v-spacer>
                <v-checkbox
                  :value="isSelected(l.price)"
                  @click="toggleSelected(l)"
                >
                </v-checkbox>
              </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="selected"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="(v) => (loading = v)"
          />
          <v-btn
            class="mt-4"
            block
            :disabled="!selectedLineItem"
            @click="submit"
            :dark="!!selectedLineItem"
            color="blue"
            >Donate</v-btn
          >
        </v-col>
      </v-row>
      <p class="text-center text-weak">Donations are handled by Stripe Checkout.</p>
      <p class="text-center text-weak">You will return after the transaction.</p>
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
    // publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    publishableKey: 'pk_live_rgO4Hlt3GXvvxcZ2K3k8THzV', // nonsense key
    model: '',
    selected: [],
    selectedLineItem: null,
    loading: false,
    max: 1,
    lineItems: [
      {
        price: 'price_1HzWmIDgTT4Ywrr9BnTKEU0k', // The id of the one-time price you created in your Stripe dashboard
        value: 10,
        quantity: 1,
      },
      {
        price: 'price_1HzWmIDgTT4Ywrr98bJehBdg',
        value: 20,
        quantity: 1,
      },
      {
        price: 'price_1HzWmIDgTT4Ywrr9MPhFJ2Nj',
        value: 50,
        quantity: 1,
      },
      {
        price: 'price_1IBijzDgTT4Ywrr967oDZz9A',
        value: 100,
        quantity: 1,
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
        this.selected.push({ price: lineItemObject.price, quantity: lineItemObject.quantity });
      }
    },
    isSelected(priceHash) {
      return !!this.selectedLineItem && this.selectedLineItem.price === priceHash;
    },
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  computed: {
    deSelectCheckbox() {
      if (
        this.selected.length >= this.max
        && this.selected.includes(this.lineItems.price)
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
