<script lang="ts" setup>
const headerColorIsDark = computed(() => {
  const isDark = useRoute().path === '/';
  return isDark;
});

const headerClass = computed(() => {
  return headerColorIsDark.value ? '' : 'header-mobile--light';
});
</script>

<template>
  <header class="header-mobile" :class="headerClass">
    <div class="container">
      <div class="header-mobile__wrapper">
        <div class="header-mobile__col">
          <a
            class="header-mobile__address"
            href="https://yandex.ru/maps/?rtext=~45.01151530529911%2C41.929150298237595"
            target="_blank"
            rel="noopener"
          >
            <IcNavigationArrow :font-controlled="false" :filled="true" />
            <p class="header-mobile__address-text">ул. Доваторцев, 47 Б</p>
          </a>
          <div class="header-mobile__calls">
            <a class="header-mobile__calls-phone" href="tel:88652500520" rel="noopener">+7 (8652) 500-520</a>
          </div>
        </div>
        <div class="header-mobile__col">
          <div class="header-mobile__logo">
            <NuxtLink class="header__logo" to="/">
              <IcLogoMobile v-if="headerColorIsDark" :font-controlled="false" :filled="true" />
              <IcLogoMobileDark v-else :font-controlled="false" :filled="true" />
            </NuxtLink>
          </div>
          <div class="header-mobile__burger-menu">
            <button class="header-mobile__burger-menu-button" type="button">
              <IcBurgerMenu :font-controlled="false" :filled="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-mobile {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  background: #000;
  padding: 10px 0;
  color: #fff;

  @include tablet {
    display: block;
  }

  @include mobile {
    display: block;
  }

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