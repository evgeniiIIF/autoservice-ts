<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';
import type { Contacts, Social } from '@/store/contacts/contacts.types';
import type { MenuItem } from '@/store/menu/menu.types';

const { isDesktop } = useMediaSizes();

const props = defineProps<{
  isOpenServicesAllModal: boolean;
  isOpenMobileMenu: boolean;
  contacts: Contacts;
  socials: Social[];
  menu: MenuItem[];
}>();
const emits = defineEmits<{
  (event: 'toggleServicesAllModal'): void;
  (event: 'closeServicesAllModal'): void;
  (event: 'closeMobileMenu'): void;
  (event: 'openMobileMenu'): void;
  (event: 'toggleMobileMenu'): void;
}>();

const headerColorIsDark = computed(() => {
  const isDark = useRoute().path === '/';
  return isDark;
});

const headerClass = computed(() => {
  return headerColorIsDark.value ? '' : 'header-mobile--light';
});

const clickOnLink = () => {
  emits('closeMobileMenu');
};

useRouter().afterEach((to, from) => {
  if (from.path === '/services' && !isDesktop.value) {
    emits('openMobileMenu');
  }
});
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const handleClickLogo = () => {
  scrollToTop();
  if (props.isOpenServicesAllModal) {
    emits('closeServicesAllModal');
  }

  if (props.isOpenMobileMenu) {
    emits('closeMobileMenu');
  }
};
</script>

<template>
  <header class="header-mobile" :class="headerClass">
    <div class="container">
      <div class="header-mobile__wrapper">
        <div class="header-mobile__col">
          <a
            v-if="contacts.content.route_link"
            class="header-mobile__address"
            :href="contacts.content.route_link"
            target="_blank"
            rel="noopener"
          >
            <IcNavigationArrow :font-controlled="false" :filled="true" />
            <p class="header-mobile__address-text">ул. Доваторцев, 47 Б</p>
          </a>
          <div v-if="contacts.content.phone" class="header-mobile__calls">
            <a class="header-mobile__calls-phone" :href="`tel:${contacts.content.phone}`" rel="noopener">{{
              contacts.content.phone
            }}</a>
          </div>
        </div>
        <div class="header-mobile__col">
          <div class="header-mobile__logo">
            <NuxtLink class="header__logo" to="/" @click="handleClickLogo">
              <IcLogoMobile v-if="headerColorIsDark" :font-controlled="false" :filled="true" />
              <IcLogoMobileDark v-else :font-controlled="false" :filled="true" />
            </NuxtLink>
          </div>
          <div class="header-mobile__burger-menu">
            <button class="header-mobile__burger-menu-button" type="button" @click="emits('toggleMobileMenu')">
              <IcBurgerMenuClose v-if="isOpenMobileMenu" :font-controlled="false" :filled="true" />
              <IcBurgerMenu v-if="!isOpenMobileMenu" :font-controlled="false" :filled="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="header-mobile__menu">
      <LazyAppMobileMenu
        :contacts="contacts"
        :socials="socials"
        :menu="menu"
        :is-open="isOpenMobileMenu"
        position="left"
        :is-open-services-all-modal="isOpenServicesAllModal"
        @clickOnLink="clickOnLink"
        @toggleServicesAllModal="emits('toggleServicesAllModal')"
      />
    </div>
  </header>
</template>

<style lang="scss">
.header-mobile {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  background: #000;
  padding: 10px 0;
  color: #fff;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__col {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__address {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;

    &-text {
      @include text-main-small;
      color: $color-gray-light;
      border-bottom: 1px dashed $color-gray-light;
    }
  }

  &__calls {
    &-phone {
      @include text-phone-mobile;
      color: $color-white;
      text-decoration: none;

      @include to(320px) {
        font-size: 12px;
      }
    }
  }

  &__burger-menu {
    &-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: $burger-button-border;
      background: none;
      border-radius: 50%;
      cursor: pointer;
      svg {
        @include fill-svg-and-path(#fff);
      }
    }
  }

  &--light {
    background: $color-white;
    color: $color-blue;

    .header-mobile {
      &__calls-phone {
        color: $color-blue;
      }

      &__burger-menu-button {
        svg {
          @include fill-svg-and-path($color-blue);
        }
      }
    }
  }
}
</style>
