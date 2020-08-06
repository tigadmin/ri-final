<template>
    <section class="pb-5">
        <v-container grid-list-xl>
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <v-card class="elevation-0">
                        <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                        <v-card-content class="justify-center">
                            <iframe
                                    allowfullscreen
                                    height="300"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.2796658865987!2d-82.37073328476309!3d34.87432298039027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582e12e602c2bb%3A0xc9f329f85692945d!2s1541+Wade+Hampton+Blvd%2C+Greenville%2C+SC+29609!5e0!3m2!1sen!2sus!4v1543000918688"
                                    style="border:0"
                                    width="100%"
                            ></iframe>
                        </v-card-content>
                    </v-card>
                    <v-card class="pa-lg-5 pt-5 pb-5">
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">
                            <v-list>
                                <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                                <v-list-tile-content class="ma-2"
                                ><b>YUMAPOS USA Corporate</b></v-list-tile-content

                                <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                                                <v-list-tile-content class="ma-2"
                                >1541-D Wade Hampton Blvd. Greenville, SC
                                    29609
                                </v-list-tile-content
                                >
<!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                                <v-list-tile-content class="ma-2"
                                ><b>(864) 990-1059</b></v-list-tile-content
                                >
                            </v-list>
                        </v-card-text>
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">
                            Please select an option below:
                        </v-card-text>

                        <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                        <v-card-content class="justify-center">
                            <div class="my-2">
                                <router-link to="/consult">
                                    <v-btn class="ma-2" color="primary" depressed large
                                    >I Want To Schedule A Consultation
                                    </v-btn
                                    >
                                </router-link
                                >
                                <router-link to="/help">
                                    <v-btn class="ma-2" color="primary" depressed large
                                    >I Need Support
                                    </v-btn
                                    >
                                </router-link
                                >
                                <router-link to="/partner">
                                    <v-btn class="ma-2" color="primary" depressed large
                                    >I Want To Become A Partner
                                    </v-btn
                                    >
                                </router-link>
                            </div>
                            <!--<v-form
                                        ref="form"
                                        v-model="valid"
                                        lazy-validation
                                        role="form"
                                        method="post"
                                        action="https://oversearch.org/index.php/form/submit?formId=5"
                                        id="mauticform_wrapper_yumaposcontactus"
                                        data-mautic-form="yumaposcontactus"
                                        enctype="multipart/form-data"
                                        autocomplete="false"
                                >
                                    <div class="mauticform-message" id="mauticform_yumaposcontactus_message"></div>
                                    <v-text-field
                                            v-model="name"
                                            :counter="10"
                                            :rules="nameRules"
                                            label="First Name"
                                            id="mauticform_input_yumaposcontactus_first_name"
                                            for="mauticform_input_yumaposcontactus_first_name"
                                            name="mauticform[first_name]"
                                            value=""
                                            type="text"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="lname"
                                            :counter="10"
                                            :rules="lnameRules"
                                            label="Last Name"
                                            id=" mauticform_input_yumaposcontactus_last_name"
                                            for="mauticform_input_yumaposcontactus_last_name"
                                            name="mauticform[last_name]"
                                            value=""
                                            type="text"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="company"
                                            :counter="10"
                                            :rules="companyRules"
                                            label="Company"
                                            id=" mauticform_input_yumaposcontactus_company"
                                            for=" mauticform_input_yumaposcontactus_company"
                                            name="mauticform[company]"
                                            value=""
                                            type="text"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="phone"
                                            id="mauticform_input_yumaposcontactus_phone"
                                            for="mauticform_input_yumaposcontactus_phone"
                                            name="mauticform[phone]"
                                            value=""
                                            class="mauticform-input"
                                            type="tel"
                                            :counter="10"
                                            :rules="phoneRules"
                                            label="Phone"
                                            data-validate="phone"
                                            data-validation-type="tel"
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            label="Email"
                                            id="mauticform_input_yumaposcontactus_email"
                                            for="mauticform_input_yumaposcontactus_email"
                                            name="mauticform[email]"
                                            type="email"
                                            value=""
                                            required
                                    ></v-text-field>

                                    <v-btn
                                            :disabled="!valid"
                                            color="success"
                                            @click="validate"
                                            type="submit"
                                            name="mauticform[submit]"
                                            id="mauticform_input_yumaposcontactus_submit"
                                    >
                                        Submit
                                    </v-btn>
                                    <input type="hidden" name="mauticform[formId]" id="mauticform_yumaposcontactus_id" value="5">
                                    <input type="hidden" name="mauticform[return]" id="mauticform_yumaposcontactus_return" value="">
                                    <input type="hidden" name="mauticform[formName]" id="mauticform_yumaposcontactus_name" value="yumaposcontactus">
                                </v-form>-->
                        </v-card-content>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>

    <!--<v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    id="__vtigerWebForm"
                    name="Yuma POS Contact Form"
                    action="https://jasonnetstudiosinccom.od2.vtiger.com/modules/Webforms/capture.php"
                    method="post"
                    accept-charset="utf-8"
                    enctype="multipart/form-data"
                    >
                      <input type="hidden" name="__vtrftk" value="sid:32bafeb90365eb1f7eb33e4dd498bdf9e1f6c65c,1582491600">
                      <input type="hidden" name="publicid" value="1ca9b5fcb8b0dc30629b65c337448f7f">
                      <input type="hidden" name="urlencodeenable" value="1">
                      <input type="hidden" name="name" value="Yuma POS Contact Form">
                      <input type="hidden" name="__vtCurrency" value="1">
                    <v-text-field
                      v-model="account_id"
                      :counter="40"
                      :rules="nameRules"
                      name="account_id"
                      label="Organization Name"
                      data-label=""
                      value=""
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="firstname"
                      :counter="40"
                      :rules="nameRules"
                      name="firstname"
                      label="First Name"
                      data-label=""
                      value=""
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="lastname"
                      :counter="80"
                      :rules="nameRules"
                      name="lastname"
                      label="Last Name"
                      data-label=""
                      value=""
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      name="email"
                      data-label="Primary Email"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="phone"
                      :rules="nameRules"
                      label="Phone"
                      name="phone"
                      data-label=""
                      required
                    ></v-text-field>
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      value="Submit"
                      @click="validate"
                      id="vtigerFormSubmitBtn"
                    >
                      Validate
                    </v-btn>
                  </v-form>-->
</template>

<style scoped></style>
