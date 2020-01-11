import  axios from "axios"
class YandexTransleteApi{
    static  Translete(text, lang){
        let url= "https://translate.yandex.net/api/v1.5/tr.json/translate?" +
            "key=trnsl.1.1.20200109T095459Z.dafc958d7794c4f0.35a471a03d769c0ea8c2251eb35c5b18daa11b3f"+
            "&text="+text+
            "&lang="+lang+
            "&format=plain";
        return axios.get(url)
    }

    static getAllLangues(){
        let url="https://translate.yandex.net/api/v1.5/tr.json/getLangs?"+
            "key=trnsl.1.1.20200109T095459Z.dafc958d7794c4f0.35a471a03d769c0ea8c2251eb35c5b18daa11b3f"+
            "&ui=ru";
        return axios.get(url);

    }
}

export default YandexTransleteApi;