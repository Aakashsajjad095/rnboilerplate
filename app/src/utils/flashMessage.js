import { showMessage, hideMessage } from "react-native-flash-message";
class FlashMessageService {
  ShowFlashMessage = async (title, description,type,icon) => {
    showMessage({
        message:title,
        description:description,
        type:type,
        animated:true,
        duration:5000,
        icon:icon
      });
  };
}

export const flashMessageService = new FlashMessageService();
