<template>
  <v-container>
    <v-row>
      <v-col>
    <h1 class="text-center">Newsletter Subscription Successful!</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row justify="center" align="center">
      <v-col cols=3>
        <v-btn
          class="ml-18"
          text
          color="blue"
          to="/"
        >Return to Homepage</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MailChimpSuccess',
};

</script>
