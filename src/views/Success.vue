<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col align="center">
          <v-card elevation="0">
            <h2>Your payment has been Processed.</h2>
            <v-card-subtitle>From all of us here at GraceWay Radio,
              thank you for your tax-deductible donation!
            </v-card-subtitle>
            <v-card-text
            class="text-center">A receipt will be sent to your email address.</v-card-text>
            <v-card-text
            class="text-center">Your Invoice will say - CDM GraceWay Radio</v-card-text>
            <v-btn
              text
              color="blue"
              to="/"
            >Return to Homepage</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-center mt-8 mb-n4">
        <v-col>
          <p class="text-center text-caption">Didn't recieve a reciept?
            <a href="mailto:admin@gracewayradio.com">Send us an email</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Success',
  components: {},
};
</script>
