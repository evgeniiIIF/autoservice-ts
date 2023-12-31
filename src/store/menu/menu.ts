import { ref } from 'vue';
import { defineStore } from 'pinia';
import { menuHttp } from '@/api/http';
import type { MenuStore, MenuItem } from '@/store/menu/menu.types';

const DEFAULT_STATE: MenuStore = {
  headerMenu: [],
  footerServicesMenu: [],
  footerAdditionalServicesMenu: [],
  footerAboutCompanyMenu: [],
};

export const menuStore = defineStore('menuStore', () => {
  const state = ref(DEFAULT_STATE);

  const setHeaderMenu = (data: MenuItem[]) => {
    state.value.headerMenu = data;
  };

  const setFooterServicesMenu = (data: MenuItem[]) => {
    state.value.footerServicesMenu = data;
  };

  const setFooterAdditionalServicesMenu = (data: MenuItem[]) => {
    state.value.footerAdditionalServicesMenu = data;
  };

  const setFooterAboutCompanyMenu = (data: MenuItem[]) => {
    state.value.footerAboutCompanyMenu = data;
  };

  const fetchHeaderMenu = async () => {
    try {
      const { data } = await menuHttp.fetchHeaderMenu();

      setHeaderMenu(data.value?.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFooterServicesMenu = async () => {
    try {
      const { data } = await menuHttp.fetchFooterServicesMenu();

      setFooterServicesMenu(data.value?.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFooterAdditionalServicesMenu = async () => {
    try {
      const { data } = await menuHttp.fetchFooterAdditionalServicesMenu();

      setFooterAdditionalServicesMenu(data.value?.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFooterAboutCompanyMenu = async () => {
    try {
      const { data } = await menuHttp.fetchFooterAboutCompanyMenu();

      setFooterAboutCompanyMenu(data.value?.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchHeaderMenu,
      fetchFooterServicesMenu,
      fetchFooterAdditionalServicesMenu,
      fetchFooterAboutCompanyMenu,
    },
  };
});
