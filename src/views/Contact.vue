<template>
  <div class="contact">
  <h2 class='text-center mt-4'>Contact Us</h2>
  <v-divider inset></v-divider>
  <v-form v-model='valid'>
    <v-container>
      <v-row>
      <v-col sm=10 md=4>
      <v-text-field
        v-model='firstname'
        :rules='nameRules'
        :counter='25'
        label="First Name"
        requrired
      >
      </v-text-field>
      <v-text-field
        v-model='lastname'
        :counter='25'
        :rules='nameRules'
        label="Last Name"
        required
      >
      </v-text-field>
      <v-text-field
        v-model='email'
        label="Email"
        :counter='30'
        :rules='emailRules'
        required
      ></v-text-field>
      </v-col>
      </v-row>
      <v-row>
      <v-col>
      <v-textarea
        v-model='fulltext'
        label="Message"
        :counter='250'
        :rules='fullTextRules'
        clearable
        name="name"
        solo
        required
      ></v-textarea>
      </v-col>
      </v-row>
      <v-btn class='ma-4' type='submit'>Submit</v-btn>
    </v-container>
  </v-form>
  <v-row class='d-flex-row justify-center'>
  <v-btn
  v-for='i in icons'
  :key='i.name'
  :href='i.link'
  icon
  :target='i.target'
  >
  <v-icon>{{i.name}}</v-icon>
  </v-btn>
  </v-row>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is Required',
      (v) => (v.length < 3 && /\S+\D+/.test(v)) || 'Name cannot be less than 3 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    fulltext: '',
    fullTextRules: [
      (v) => !!v || 'Text area cannot be left blank',
      (v) => /(<script>)+/.text(v) || 'No script tags allowed',
    ],
    icons: [
      {
        name: 'mdi-email',
        link: 'mailto:admin@gracewayradio.com',
        target: '_blank',
      },
      {
        name: 'mdi-twitter',
        link: 'https://twitter.com/gracewayradio',
        target: '_blank',
      },
      {
        name: 'mdi-instagram',
        link: 'https://www.instagram.com/gracewayradio/',
        target: '_blank',
      },
      {
        name: 'mdi-facebook',
        link: 'https://www.facebook.com/mastersvoiceradio',
        target: '_blank',
      },
      {
        name: 'mdi-pinterest',
        link: 'https://www.pinterest.com/0d3aa86dbac59562a79530250b16e8/_saved/',
        target: '_blank',
      },
      {
        name: '@/assets/Parler-logo.png', // TODO  get this one working
        link: '', // TODO add link for parler,
        target: '_blank',
      }],
  }),
  components: {},
};
</script>
