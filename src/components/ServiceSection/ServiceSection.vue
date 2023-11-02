<script setup lang="ts"></script>

<template>
  <section class="service-section">
    <div class="container">
      <div class="service-section__service-path">
        <NuxtLink class="service-section__service-path-home" to="/">Главная</NuxtLink>
        <span class="service-section__service-path-arrow">
          <IcArrowRight :font-controlled="false" :filled="true" />
        </span>
        <span class="service-section__service-path-text">Диагностика системы кондиционирования</span>
      </div>
      <div class="service-section__service">
        <div class="service-section__service-info">
          <div class="service-section__service-header">
            <h1 class="service-section__service-title">Диагностика системы кондиционирования</h1>
            <div class="service-section__service-price">
              <span class="service-section__service-price-icon">
                <IcPriceTag :font-controlled="false" :filled="true" />
              </span>
              <span class="service-section__service-price-text">от 1400 ₽</span>
            </div>
          </div>
          <div class="service-section__service-info-image">
            <NuxtImg src="/service-1.jpg" fit="contain" loading="lazy" />
          </div>
          <p class="service-section__service-description">
            Кондиционер служит для регулирования температуры, циркуляции и очищения воздуха в салоне автомобиля. Вместе
            с воздухом в салон автомобиля проникают бактерии, неприятный газ, угарный газ и другие негативные добавки.
          </p>
          <div class="service-section__service-bonus-program">
            <span class="service-section__service-bonus-program-icon">
              <IcCard :font-controlled="false" :filled="true" />
            </span>
            <span class="service-section__service-bonus-program-text">Услуга участвует в бонусной программе</span>
          </div>
          <div class="service-section__service-button">
            <UIButton text="Записаться" :is-filled="true" :size-large="true" />
          </div>
        </div>
        <div class="service-section__service-image">
          <NuxtImg src="/service-1.jpg" fit="contain" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.service-section {
  position: relative;
  padding: 65px 0 60px 0;

  @include mobile {
    padding: 58px 0 29px 0;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    max-width: 1200px;
    width: 100%;
    height: 1px;
    transform: translateX(-50%);
    background-color: #f0f0f5;
    content: '';

    @include mobile {
      display: none;
    }
  }

  &__service {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    &-path {
      display: flex;
      align-items: center;
      gap: 2px;
      margin-bottom: 35px;

      @include tablet {
        display: none;
      }

      @include mobile {
        display: none;
      }

      &-home {
        @include text-main;
        color: $color-black-light;
        text-decoration: underline;
      }

      &-arrow {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-text {
        @include text-main;
        color: $color-gray-dark;
      }
    }

    &-info {
      max-width: 490px;

      @include tablet {
        max-width: inherit;
      }

      @include mobile {
        max-width: inherit;
      }

      &-image {
        display: none;
        //width: 100%;

        @include tablet {
          display: flex;
        }

        @include mobile {
          display: flex;
        }

        img {
          width: 100%;
        }
      }
    }

    &-header {
      margin-bottom: 20px;

      @include tablet {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
      }

      @include mobile {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
      }
    }

    &-title {
      margin-bottom: 20px;
      @include title-main-large-bold;
      color: $color-blue;

      @include tablet {
        margin-bottom: 0;
        @include title-main-xxsmall-bold;
      }

      @include mobile {
        margin-bottom: 0;
        @include title-main-xxsmall-bold;
      }
    }

    &-price {
      display: flex;
      align-items: center;
      gap: 3px;

      @include tablet {
        width: 100%;
        max-width: 100px;
      }

      @include mobile {
        width: 100%;
        max-width: 100px;
      }

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-text {
        @include button-text;
        color: $color-second;

        @include tablet {
          @include button-text-grow;
        }

        @include mobile {
          @include button-text-grow;
        }
      }
    }

    &-description {
      margin-bottom: 20px;

      @include text-main;
      color: $color-main;

      @include tablet {
        margin-top: 17px;
        color: $color-blue;
      }

      @include mobile {
        margin-top: 17px;
        color: $color-blue;
      }
    }

    &-bonus-program {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 30px;

      &-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-text {
        @include text-main;
        color: $color-main;
      }
    }

    &-button {
      max-width: 183px;

      @include tablet {
        max-width: inherit;
      }

      @include mobile {
        max-width: inherit;
      }
    }

    &-image {
      display: flex;
      width: 100%;
      max-width: 590px;

      @include tablet {
        display: none;
      }

      @include mobile {
        display: none;
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>