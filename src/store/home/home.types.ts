export interface Home {
  id: number;
  site_id: number;
  site_root_id: number;
  blueprint_uuid: string;
  content: {
    calculator_btn_title: string;
    bonus_title: string;
    bonus_subtitle: string;
    bonus_description: string;
    bonus_show_btn: string;
    bonus_title_link: string;
    bonus_url_link: string;
    about_title: string;
    about_dsc: string;
    about_title_link: string;
    about_link: string;
    is_active_welcome: string;
    is_active_calculator: string;
    'bg_calculator?': string;
    is_active_bonus_program: string;
    is_active_services: string;
    bg_services?: string;
    is_active_partners: string;
    bg_partners: string;
    is_active_about_company: string;
    bg_about_company: string;
    is_active_reviews: string;
    bg_reviews?: string;
    is_active_open_leadform: string;
    bg_open_leadform: string;
    is_active_marquee_brands: string;
  };
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
  calculator_btn_title: string;
  bonus_title: string;
  bonus_subtitle: string;
  bonus_description: string;
  bonus_show_btn: string;
  bonus_title_link: string;
  bonus_url_link: string;
  about_title: string;
  about_dsc: string;
  about_title_link: string;
  about_link: string;
  is_active_welcome: string;
  is_active_calculator: string;
  bg_calculator?: string;
  is_active_bonus_program: string;
  is_active_services: string;
  bg_services?: string;
  is_active_partners: string;
  bg_partners?: string;
  is_active_about_company: string;
  bg_about_company: string;
  is_active_reviews: string;
  bg_reviews?: string;
  is_active_open_leadform: string;
  bg_open_leadform: string;
  is_active_marquee_brands: string;
}

// export interface homeState {
//   data: Home;
// }
