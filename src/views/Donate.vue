<template>
  <div class="donate">
    <v-container>
      <v-row justify="center">
        <v-col
          align="center"
          :cols="$vuetify.breakpoint.smAndDown ? '11': '4'"
        >
          <v-card>
            <v-list>
              <v-list-item-group v-model='model'>
                <v-list-item
                  v-for="l in lineItems"
                  :key="l.price"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-cash</v-icon>
                  </v-list-item-icon>
                  <v-spacer>  </v-spacer>
                  <v-list-item-content>
                    <v-checkbox
                      v-model='selected'
                      label="cost"
                      :value="l"
                      :disabled="deSelectCheckbox"
                    >
                    </v-checkbox>
                  </v-list-item-content>
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
            @loading="v => loading = v"
          />
          <v-btn
            @click="submit"
            dark
            color="blue"
          >Donate</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    publishableKey: '1539393040rdkdoi',
    model: '',
    selected: [],
    loading: false,
    max: 1,
    lineItems: [
      {
        price: 'price_1HzWmIDgTT4Ywrr9BnTKEU0k', // The id of the one-time price you created in your Stripe dashboard
        quantity: 1,
      },
      {
        price: 'price_1HzWmIDgTT4Ywrr98bJehBdg',
        quantity: 1,
      },
      {
        price: 'price_1HzWmIDgTT4Ywrr9MPhFJ2Nj',
        quantity: 1,
      },
      {
        price: 'price_1IBijzDgTT4Ywrr967oDZz9A',
        quantity: 1,
      },
    ],
    successURL: 'https://www.gracewayradio.com/success',
    cancelURL: 'https://www.gracewayradio.com/cancel',
  }),
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  computed: {
    deSelectCheckbox() {
      if (this.selected.length >= this.max && this.selected.includes(this.lineItems.price)
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
