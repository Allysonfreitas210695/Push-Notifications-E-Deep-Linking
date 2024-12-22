import { OneSignal } from "react-native-onesignal";

// export function tagUserEmailCreate(email: string){
//     OneSignal.User.addTag("user_email", email);
// }


export function tagUserInfoCreate(){
    OneSignal.User.addTags({
        user_name: "allyson",
        user_email: "alisonfr83@gmail.com"
    });
}