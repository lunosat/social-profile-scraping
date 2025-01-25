import axios from "axios"
import * as cheerio from 'cheerio';
import selectors from "../utils/selectors";

const whatsappScrapper = async (phone: string) => {
    try {
        const url = `https://api.whatsapp.com/send/?phone=${phone}`
        const html = await axios.get(url)

        const $ = cheerio.load(html.data);
        const pictureElement = $(selectors.whatsapp.picture).attr("src") || null;
        const usernameElement = $(selectors.whatsapp.username).text().trim() || null;

        return {
            picture: pictureElement,
            username: usernameElement, 
            phone
        }
    } catch (error: unknown) {
        if(axios.isAxiosError(error)){
            throw new Error(`Error on fetch data: ${error.message}`)
        }
        throw new Error(`Unexpected error: ${(error as Error).message}`)
    }
}

export default whatsappScrapper