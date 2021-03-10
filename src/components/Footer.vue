<template>
  <div>
    <v-divider class="mt-4"></v-divider>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
        order="1"
      >
        <v-card elevation="0">
          <v-card-title class="justify-center text-h4">About Us</v-card-title>
          <v-card-text class="pr-0">
            GraceWay Radio is a one-of-a-kind station that is dedicated to the
            transmission of true worship and Spirit-inspired messages that will foster
            real spiritual growth in listeners...
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="offset-md-1"
        order-md="2"
        order="3"
        align-self="center"
      >
        <v-row>
          <v-col cols="3">
            <v-btn
              x-large
              icon
              target="_blank"
              href="https://facebook.com/gracewayradio"
            >
              <v-icon x-large>mdi-facebook</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              x-large
              icon
              href="https://twitter.com/gracewayradio"
              target="_blank"
            >
              <v-icon x-large>mdi-twitter</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              x-large
              icon
              target="_blank"
              href="https://www.pinterest.com/0d3aa86dbac59562a79530250b16e8"
            >
              <v-icon x-large>mdi-pinterest</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              x-large
              icon
              target="_blank"
              href="https://www.instagram.com/gracewayradio/"
            >
              <v-icon x-large>mdi-instagram</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div id="mc_embed_signup">
              <form
                action="https://Gracewayradio.us7.list-manage.com/subscribe/post?u=14e2e4a315819f96d74c4f06a&amp;id=886b1d6cb7"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">

                  <div class="mc-field-group">
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      class="required"
                      placeholder="First Name"
                      id="mce-FNAME"
                    >
                  </div>
                  <div class="mc-field-group">
                    <input
                      type="text"
                      value=""
                      name="LNAME"
                      class="required"
                      placeholder="Last Name"
                      id="mce-LNAME"
                    >
                  </div>
                  <div class="mc-field-group">
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      placeholder="Newsletter Signup"
                      class="required email"
                      id="mce-EMAIL"
                    >
                  </div>
                  <div
                    id="mce-responses"
                    class="clear"
                  >
                    <div
                      class="response"
                      id="mce-error-response"
                      style="display:none"
                    ></div>
                    <div
                      class="response"
                      id="mce-success-response"
                      style="display:none"
                    ></div>
                  </div> <!-- real people should not fill this in and expect good things
                  - do not remove this or risk form bot signups-->
                  <div
                    style="position: absolute; left: -5000px;"
                    aria-hidden="true"
                  ><input
                      type="text"
                      name="b_14e2e4a315819f96d74c4f06a_886b1d6cb7"
                      tabindex="-1"
                      value=""
                    ></div>
                  <div class="clear"><input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                    ></div>
                </div>
              </form>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
        order="2"
        order-md="3"
        class="offset-md-1"
      >
        <v-card elevation="0">
          <v-card-title class="justify-center text-h4">Contact</v-card-title>
          <v-card-text class='text-center'>
            <v-btn
              href="mailto:admin@gracewayradio.com"
              icon
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <p class="font-weight-thin text-center">&copy; 2020 GraceWay Radio</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
};
</script>

<style lang="scss" scoped>
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;

  input[type=text], input[type=email] {
    width: 100%;
    padding: 0.4rem;
    background: rgb(250, 250, 250);
    border-radius: 8px;
    margin-bottom: 0.3rem;
    outline: none;
    border: 1px solid #d3d3d3;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.09);
    transition: all 0.3s ease-out;

    &:focus {
      box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.5);
      background: transparent;
    }
  }
  .button {
    background: #0689b1;
    border-radius: 8px;
    border: none;
    transition: background 0.3s ease-out;
    width:100%;

    &:hover {
      background: #10b2d3;
    }
  }
}
</style>
