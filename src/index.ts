import whatsappScrapper from "./scrappers/whatsapp";

export class SocialScrapper {
  /**
   * Scrapes a public WhatsApp profile
   * @param phone - Phone number in international format (e.g., 5511999999999)
   * @returns WhatsApp profile data
   */
    static whatsapp = async (phone: string) => {
    try {
      const profile = await whatsappScrapper(phone);
      return profile;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error scraping WhatsApp: ${error.message}`);
      }
      throw error;
    }
  };
}

