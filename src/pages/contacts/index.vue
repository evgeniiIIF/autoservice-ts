<script setup lang="ts">
import { useContactsStore } from '~/store/contacts';
import type { Contacts } from '@/store/contacts/contacts.types';
import { useMediaSizes } from '../../composables/useMediaSizes';

const { isMobile } = useMediaSizes();

const { contactsState, contactsEffects } = useContactsStore();

await useAsyncData('layout', async () => {
  await Promise.all([Object.keys(contactsState.value.contacts).length === 0 && contactsEffects.fetchContacts()]);
});

const contacts = contactsState.value.contacts as Contacts;
</script>
<template>
  <div>
    <section class="contacts">
      <div class="container">
        <div class="contacts__wrapper">
          <h2 class="contacts__title">Контакты</h2>
          <div class="contacts__body">
            <div class="contacts__info info-contacts">
              <div class="info-contacts__address">{{ contacts.address }}</div>
              <a class="info-contacts__phone" :href="`tel:${contacts.phone}`">{{ contacts.phone }}</a>
              <div class="info-contacts__time">{{ contacts.schedule }}</div>
              <a class="info-contacts__email" :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
            </div>
            <div class="contacts__map map">
              <div v-if="isMobile" class="map__button">
                <a class="map__button-link" :href="contacts.route_link" target="_blank" rel="noopener">
                  <UIButton text="Построить маршрут в навигаторе" :is-filled="true" :has-full-width="true" />
                </a>
              </div>
              <div class="map__wrapper ibg">
                <!--  eslint-disable-next-line vuejs-accessibility/iframe-has-title -->
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf07745ef68e3a312fd40eec7814dc636979444f524d6b267d3c90c4c6cd9b01&source=constructor"
                  width="1039"
                  height="492"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ServiceForm />
  </div>
</template>

<style lang="scss">
.contacts {
  &__wrapper {
    padding: 80px 0;
    @include tablet() {
      padding: 50px 0 0;
    }
    @include mobile() {
      padding: 50px 0 0;
    }
  }

  &__title {
    margin-bottom: 30px;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 133.333% */
    color: var(--Black, #18243c);
  }
  &__body {
    display: flex;
    @include tablet() {
      flex-direction: column;
    }
    @include mobile() {
      flex-direction: column;
    }
  }
  &__info {
    flex: 0 0 304px;
    margin-right: 8.7%;
    padding: 28px 0 165px 0;

    @include tablet() {
      flex: 0 0 auto;
      margin-right: 0;
      margin-bottom: 40px;
      padding: 0;
    }

    @include mobile() {
      flex: 0 0 auto;
      margin-right: 0;
      margin-bottom: 40px;
      padding: 0;
    }
  }

  &__map {
    flex: 1 1 auto;
    @include tablet() {
      .map {
        &__wrapper {
          padding-top: 35.5555556%;
        }
      }
    }
    @include mobile() {
      margin: 0 -20px;

      .map {
        &__wrapper {
          padding-top: 55.5555556%;
        }
      }
    }
  }
}

.info-contacts {
  @include mb(10px);
  &__address {
    margin-bottom: 7px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    color: var(--Black, #18243c);
  }
  &__phone {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: var(--Black2, #1b1c1c);
  }
  &__time {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: var(--6, #6b6f6e);
  }
  &__email {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    text-decoration-line: underline;
    color: var(--2, #00a19c);
  }
}

.map {
  &__wrapper {
    width: 100%;
    height: 100%;
  }
  &__button {
    margin: 0 20px 50px;
  }
}
</style>
