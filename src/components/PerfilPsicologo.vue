<template>
  <body>
    <main>
      <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0 ">
        </section>
        <section class="section section-skew">
          <div class="container">
            <card shadow class="card-profile mt--300" no-body>
              <div class="px-4">
                <div class="row justify-content-center">
                  <div class="col-lg-3 order-lg-2">
                    <div class="card-profile-image">
                      <a href="#">
                        <img
                          src="@/assets/usuario.png"
                          class="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    class="
                      col-lg-4
                      order-lg-3
                      text-lg-right
                      align-self-lg-center
                    "
                  >
                    <div class="card-profile-actions py-4 mt-lg-0">
                      <base-button type="info" size="sm" class="mr-4"
                        >Connect</base-button
                      >
                      <base-button type="default" size="sm" class="float-right"
                        >Message</base-button
                      >
                    </div>
                  </div>
                  <div class="col-lg-4 order-lg-1">
                    <div
                      class="card-profile-stats d-flex justify-content-center"
                    >
                      <div>
                        <span class="heading">22</span>
                        <span class="description">Friends</span>
                      </div>
                      <div>
                        <span class="heading">10</span>
                        <span class="description">Photos</span>
                      </div>
                      <div>
                        <span class="heading">89</span>
                        <span class="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-5">
                  <h3>
                    Jessica Jones
                    <span class="font-weight-light">, 27</span>
                  </h3>
                  <div class="h6 font-weight-300">
                    <i class="ni location_pin mr-2"></i>Bucharest, Romania
                  </div>
                  <div class="h6 mt-4">
                    <i class="ni business_briefcase-24 mr-2"></i>Solution
                    Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i class="ni education_hat mr-2"></i>University of Computer
                    Science
                  </div>
                </div>
                <div class="mt-5 py-5 border-top text-center">
                  <div class="row justify-content-center">
                    <div class="col-lg-9">
                      <p>
                        An artist of considerable range, Ryan — the name taken
                        by Melbourne-raised, Brooklyn-based Nick Murphy —
                        writes, performs and records all of his own music,
                        giving it a warm, intimate feel with a solid groove
                        structure. An artist of considerable range.
                      </p>
                      <a href="#">Show more</a>
                    </div>
                  </div>
                </div>
              </div>
            </card>
          </div>
        </section>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
<style>
body {
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #525f7f;
  background-color: #fff;
}

element.style {
  transform-origin: center center;
}

div {
  display: block;
}

.section-profile-cover {
  height: 580px;
  background-size: cover;
  background-position: 50%;
  background-color: #32425b;

}

.section-shaped {
  margin: 180px 0;
  position: relative;
}
.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}
.mt-0,
.my-0 {
  margin-top: 0 !important;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

.section-shaped .shape-style-1.shape-primary {
  background: linear-gradient(
    150deg,
    #32425b 15%,
    #94abbd 70%,
    #f2d3ac 94%
  ) !important;
}

.section-shaped .shape {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}

*,
:after,
:before {
  /* -webkit-box-sizing: border-box; */
  box-sizing: border-box;
}
.section {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1040px !important;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px !important;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 992px) {
  .mt--300 {
    margin-top: -300px !important;
  }
}
.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}
.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet div {
  display: block;
}

justify-content-center {
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 992px) {
  .order-lg-2 {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
}
@media (min-width: 992px) {
  .col-lg-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
}
.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.profile-page .card-profile .card-profile-image {
  position: relative;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  color: #5e72e4;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
.profile-page .card-profile .card-profile-image img {
  max-width: 180px;
  border-radius: 0.25rem;
  -webkit-transform: translate(-50%, -30%);
  transform: translate(-50%, -30%);
  position: absolute;
  left: 50%;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  position: relative;
  top: -25px;
}
.profile-page .card-profile .card-profile-image img,
.shadow {
  -webkit-box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07) !important;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
img,
svg {
  vertical-align: middle;
}
img {
  border-style: none;
}

@media (min-width: 992px) {
  .text-lg-right {
    text-align: right !important;
  }
}
@media (min-width: 992px) {
  .align-self-lg-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
}

@media (min-width: 992px) {
  .order-lg-3 {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
  }
}
.profile-page .card-profile .card-profile-actions {
  padding: 0.875rem;
}
@media (min-width: 992px) {
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }
}
.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}
.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.btn-group-sm > .btn,
.btn-sm {
  font-size: 0.75rem;
}
.btn {
  position: relative;
  text-transform: uppercase;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  will-change: transform;
  letter-spacing: 0.025em;
  font-size: 0.875rem;
}
.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}
.btn-group-sm > .btn,
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}
.btn-info,
.btn-info:hover {
  color: #fff;
  background-color: #11cdef;
  border-color: #11cdef;
}
@media (min-width: 992px) {
  .order-lg-1 {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }
}
@media (min-width: 992px) {
  .col-lg-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
}
.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  /* padding-left: 15px; */
}
.profile-page .card-profile .card-profile-stats {
  padding: 1rem 0;
}
.justify-content-center {
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}
.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
.profile-page .card-profile .card-profile-stats > div {
  text-align: center;
  margin-right: 1rem;
  padding: 0.875rem;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
}
.profile-page .card-profile .card-profile-stats > div .heading {
  font-size: 1.1rem;
  font-weight: 700;
  display: block;
}
.heading {
  letter-spacing: 0.025em;
  font-size: 0.95rem;
  text-transform: uppercase;
  font-weight: 400;
}
.profile-page .card-profile .card-profile-stats > div .description {
  font-size: 0.875rem;
  color: #adb5bd;
}
.text-center {
  text-align: center !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}
.h3,
h3 {
  font-size: 1.75rem;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.3;
  color: #32325d;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.font-weight-light {
  font-weight: 300 !important;
}
font-weight-300 {
  font-weight: 300 !important;
}
.h6,
h6 {
  font-size: 1rem;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.3;
  color: #32325d;
}
.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}
.ni {
  display: inline-block;
  font: normal normal normal 14px/1 NucleoIcons;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}
.h6,
h6 {
  font-size: 1rem;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.3;
  color: #32325d;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}
.ni {
  display: inline-block;
  font: normal normal normal 14px/1 NucleoIcons;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.text-center {
  text-align: center !important;
}
.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}
.pt-5,
.py-5 {
  padding-top: 3rem !important;
}
.mt-5,
.my-5 {
  margin-top: 3rem !important;
}
.border-top {
  border-top: 0.0625rem solid #e9ecef !important;
}
main {
  overflow: hidden;
}
figcaption,
figure,
main {
  display: block;
}
.section-profile-cover {
  height: 580px;
  background-size: cover;
  background-position: 50%;
}
.section-shaped {
  margin: 180px 0;
  position: relative;
}
.section-profile-cover {
  height: 580px;
  /* background-size: cover; */
  background-position: 50%;
}
.section-shaped {
  margin: 180px 0;
  /* position: relative; */
}
.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}
.mt-0,
.my-0 {
  margin-top: 0 !important;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

.footer.has-cards {
  overflow: hidden;
  padding-top: 500px;
  margin-top: -420px;
  position: relative;
  background: 0 0;
  pointer-events: none;
}
.footer {
  background: #f4f5f7;
  padding: 3rem 0;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
.footer.has-cards:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 600px;
  height: 2000px;
  background: #f4f5f7;
  -webkit-transform: skew(0, -8deg);
  transform: skew(0, -8deg);
}
footer.has-cards .container {
  pointer-events: auto;
  position: relative;
}
@media (min-width: 992px) {
  .container-lg {
    max-width: 1160px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1040px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

body {
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #525f7f;
  background-color: #fff;
}
body {
  margin: 0;
  font-weight: 400;
  text-align: left;
}
head {
  display: none;
}

.pr-4, .px-4{
  height: 580px;
  background-size: cover;
  background-position: 50%;
  background-color: rgb(232, 232, 232);
  border-radius: 1rem;
  position: relative;
  top: -200px;
}




</style>

