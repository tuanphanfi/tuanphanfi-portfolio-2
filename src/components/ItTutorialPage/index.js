import React from 'react';
import MyNavBar from '../common/navBar';
import MyFooter from '../common/footer';
import Project from '../Projects'

const index = () => {
    let myData = [
        {
            "createdAt": "2022-03-26T21:30:50.628Z",
            "name": "Test hehe",
            "avatar": "https://cdn.fakercloud.com/avatars/nwdsha_128.jpg",
            "id": "1"
        },
        {
            "createdAt": "2022-03-27T06:16:39.139Z",
            "name": "Angelica Carroll",
            "avatar": "https://cdn.fakercloud.com/avatars/ciaranr_128.jpg",
            "id": "2"
        },
        {
            "createdAt": "2022-03-26T16:29:24.006Z",
            "name": "Miss Albert Jacobs",
            "avatar": "https://cdn.fakercloud.com/avatars/jffgrdnr_128.jpg",
            "id": "3"
        },
        {
            "createdAt": "2022-03-26T18:00:55.936Z",
            "name": "Hilda Bogisich",
            "avatar": "https://cdn.fakercloud.com/avatars/mrmartineau_128.jpg",
            "id": "4"
        },
        {
            "createdAt": "2022-03-27T09:56:04.671Z",
            "name": "Mr. Howard Vandervort",
            "avatar": "https://cdn.fakercloud.com/avatars/chaensel_128.jpg",
            "id": "5"
        },
        {
            "createdAt": "2022-03-26T20:40:21.434Z",
            "name": "Mrs. Nicole Wyman",
            "avatar": "https://cdn.fakercloud.com/avatars/BryanHorsey_128.jpg",
            "id": "6"
        },
        {
            "createdAt": "2022-03-27T08:52:43.860Z",
            "name": "Kerry Kirlin",
            "avatar": "https://cdn.fakercloud.com/avatars/syropian_128.jpg",
            "id": "7"
        },
        {
            "createdAt": "2022-03-26T23:22:21.437Z",
            "name": "Jermaine Wintheiser",
            "avatar": "https://cdn.fakercloud.com/avatars/rikas_128.jpg",
            "id": "8"
        },
        {
            "createdAt": "2022-03-27T08:39:44.800Z",
            "name": "Rosalie Wunsch",
            "avatar": "https://cdn.fakercloud.com/avatars/nerrsoft_128.jpg",
            "id": "9"
        },
        {
            "createdAt": "2022-03-27T06:27:41.765Z",
            "name": "Mandy Leannon",
            "avatar": "https://cdn.fakercloud.com/avatars/lanceguyatt_128.jpg",
            "id": "10"
        },
        {
            "createdAt": "2022-03-27T03:10:39.497Z",
            "name": "Bryant Rempel DDS",
            "avatar": "https://cdn.fakercloud.com/avatars/yayteejay_128.jpg",
            "id": "11"
        },
        {
            "createdAt": "2022-03-27T09:51:27.066Z",
            "name": "Randolph Pfeffer",
            "avatar": "https://cdn.fakercloud.com/avatars/orkuncaylar_128.jpg",
            "id": "12"
        },
        {
            "createdAt": "2022-03-27T12:12:13.835Z",
            "name": "Darnell King",
            "avatar": "https://cdn.fakercloud.com/avatars/mymyboy_128.jpg",
            "id": "13"
        },
        {
            "createdAt": "2022-03-26T17:32:22.285Z",
            "name": "Garry Koelpin II",
            "avatar": "https://cdn.fakercloud.com/avatars/levisan_128.jpg",
            "id": "14"
        },
        {
            "createdAt": "2022-03-27T02:14:43.549Z",
            "name": "Clifford Spinka IV",
            "avatar": "https://cdn.fakercloud.com/avatars/msveet_128.jpg",
            "id": "15"
        },
        {
            "createdAt": "2022-03-27T08:21:16.698Z",
            "name": "Pearl Homenick",
            "avatar": "https://cdn.fakercloud.com/avatars/dzantievm_128.jpg",
            "id": "16"
        },
        {
            "createdAt": "2022-03-27T05:20:17.569Z",
            "name": "Stacey Ernser",
            "avatar": "https://cdn.fakercloud.com/avatars/1markiz_128.jpg",
            "id": "17"
        },
        {
            "createdAt": "2022-03-26T18:00:15.471Z",
            "name": "Sonia Collins",
            "avatar": "https://cdn.fakercloud.com/avatars/nerdgr8_128.jpg",
            "id": "18"
        },
        {
            "createdAt": "2022-03-27T08:23:39.454Z",
            "name": "Cameron Champlin",
            "avatar": "https://cdn.fakercloud.com/avatars/AM_Kn2_128.jpg",
            "id": "19"
        },
        {
            "createdAt": "2022-03-27T09:39:18.347Z",
            "name": "Irene Baumbach",
            "avatar": "https://cdn.fakercloud.com/avatars/swaplord_128.jpg",
            "id": "20"
        },
        {
            "createdAt": "2022-03-26T17:41:13.892Z",
            "name": "Pat Upton PhD",
            "avatar": "https://cdn.fakercloud.com/avatars/chrisstumph_128.jpg",
            "id": "21"
        },
        {
            "createdAt": "2022-03-27T00:27:36.860Z",
            "name": "Andy Hahn",
            "avatar": "https://cdn.fakercloud.com/avatars/geobikas_128.jpg",
            "id": "22"
        },
        {
            "createdAt": "2022-03-27T08:34:18.416Z",
            "name": "Tuan Phan Iron Man",
            "avatar": "test",
            "id": "23"
        },
        {
            "createdAt": "2022-03-27T07:56:32.715Z",
            "name": "Tuan Phan Iron Man",
            "avatar": "test",
            "id": "24"
        },
        {
            "createdAt": "2022-03-26T17:14:18.129Z",
            "name": "Tuan Phan Iron Man",
            "avatar": "test",
            "id": "25"
        },
        {
            "createdAt": "2022-03-27T03:04:55.846Z",
            "name": "Ginger Becker",
            "avatar": "https://cdn.fakercloud.com/avatars/depaulawagner_128.jpg",
            "id": "26"
        },
        {
            "createdAt": "2022-03-27T02:53:32.213Z",
            "name": "Kristin Baumbach",
            "avatar": "https://cdn.fakercloud.com/avatars/danthms_128.jpg",
            "id": "27"
        },
        {
            "createdAt": "2022-03-26T15:21:46.840Z",
            "name": "Tuan Phan",
            "avatar": "https://cdn.fakercloud.com/avatars/matbeedotcom_128.jpg",
            "id": "28"
        },
        {
            "createdAt": "2022-03-27T06:07:34.303Z",
            "name": "Clay Berge",
            "avatar": "https://cdn.fakercloud.com/avatars/alexivanichkin_128.jpg",
            "id": "30"
        },
        {
            "createdAt": "2022-03-26T15:57:53.475Z",
            "name": "Mr. Donald King",
            "avatar": "https://cdn.fakercloud.com/avatars/jayrobinson_128.jpg",
            "id": "31"
        },
        {
            "createdAt": "2022-03-26T17:19:46.945Z",
            "name": "Kim Zieme DDS",
            "avatar": "https://cdn.fakercloud.com/avatars/_williamguerra_128.jpg",
            "id": "32"
        },
        {
            "createdAt": "2022-03-27T09:02:55.062Z",
            "name": "Ervin Hirthe",
            "avatar": "https://cdn.fakercloud.com/avatars/buddhasource_128.jpg",
            "id": "33"
        },
        {
            "createdAt": "2022-03-26T18:38:44.515Z",
            "name": "Sheldon Von DDS",
            "avatar": "https://cdn.fakercloud.com/avatars/alecarpentier_128.jpg",
            "id": "34"
        },
        {
            "createdAt": "2022-03-26T15:17:26.478Z",
            "name": "Francis Yost",
            "avatar": "https://cdn.fakercloud.com/avatars/lepinski_128.jpg",
            "id": "35"
        },
        {
            "createdAt": "2022-03-27T10:06:34.828Z",
            "name": "hehe",
            "avatar": "https://cdn.fakercloud.com/avatars/macxim_128.jpg",
            "id": "36"
        },
        {
            "createdAt": "2022-03-27T10:06:34.828Z",
            "name": "hehe",
            "avatar": "https://cdn.fakercloud.com/avatars/macxim_128.jpg",
            "id": "37"
        },
        {
            "createdAt": "2022-03-27T03:13:23.596Z",
            "name": "hehe",
            "avatar": "https://cdn.fakercloud.com/avatars/macxim_128.jpg",
            "id": "38"
        },
        {
            "createdAt": "2022-03-27T10:49:41.060Z",
            "name": "hehe",
            "avatar": "https://cdn.fakercloud.com/avatars/kazaky999_128.jpg",
            "id": "39"
        },
        {
            "createdAt": "2022-03-26T20:42:04.046Z",
            "name": "Elias Block DDS",
            "avatar": "https://cdn.fakercloud.com/avatars/ricburton_128.jpg",
            "id": "40"
        },
        {
            "createdAt": "2022-03-26T23:07:26.822Z",
            "name": "Tuan Phan",
            "avatar": "https://cdn.fakercloud.com/avatars/joreira_128.jpg",
            "id": "41"
        },
        {
            "createdAt": "2022-03-26T21:23:40.275Z",
            "name": "Tuan Phan",
            "avatar": "https://cdn.fakercloud.com/avatars/creartinc_128.jpg",
            "id": "42"
        },
        {
            "createdAt": "2022-03-26T17:14:18.129Z",
            "name": "Tuan Phan",
            "avatar": "https://cdn.fakercloud.com/avatars/hfalucas_128.jpg",
            "id": "43"
        },
        {
            "createdAt": "2022-03-26T19:41:54.132Z",
            "name": "Duy Viet",
            "avatar": "https://cdn.fakercloud.com/avatars/scott_riley_128.jpg",
            "id": "44"
        },
        {
            "createdAt": "2022-03-28T16:59:53.211Z",
            "name": "PVD",
            "avatar": "https://cdn.fakercloud.com/avatars/bruno_mart_128.jpg",
            "id": "45"
        },
        {
            "createdAt": "2022-04-16T18:51:26.396Z",
            "name": "Crystal Blanda",
            "avatar": "https://cdn.fakercloud.com/avatars/deviljho__128.jpg",
            "id": "46"
        },
        {
            "createdAt": "2022-04-16T16:15:02.662Z",
            "name": "Jack Paucek",
            "avatar": "https://cdn.fakercloud.com/avatars/nehfy_128.jpg",
            "id": "47"
        },
        {
            "createdAt": "2022-04-17T03:53:27.920Z",
            "name": "Rosa Romaguera",
            "avatar": "https://cdn.fakercloud.com/avatars/marshallchen__128.jpg",
            "id": "48"
        },
        {
            "createdAt": "2022-04-16T19:54:14.999Z",
            "name": "Stephen Halvorson",
            "avatar": "https://cdn.fakercloud.com/avatars/jakemoore_128.jpg",
            "id": "49"
        },
        {
            "createdAt": "2022-04-16T22:29:33.216Z",
            "name": "Eloise Schuster",
            "avatar": "https://cdn.fakercloud.com/avatars/mslarkina_128.jpg",
            "id": "50"
        },
        {
            "createdAt": "2022-04-17T09:52:38.390Z",
            "name": "Sheldon Cruickshank MD",
            "avatar": "https://cdn.fakercloud.com/avatars/aroon_sharma_128.jpg",
            "id": "51"
        },
        {
            "createdAt": "2022-04-17T01:24:58.534Z",
            "name": "Daryl Zboncak",
            "avatar": "https://cdn.fakercloud.com/avatars/dparrelli_128.jpg",
            "id": "52"
        },
        {
            "createdAt": "2022-04-17T12:06:48.598Z",
            "name": "Gladys Nolan",
            "avatar": "https://cdn.fakercloud.com/avatars/jeremiaha_128.jpg",
            "id": "53"
        },
        {
            "createdAt": "2022-04-17T02:25:22.613Z",
            "name": "Alyssa Lubowitz",
            "avatar": "https://cdn.fakercloud.com/avatars/shanehudson_128.jpg",
            "id": "54"
        },
        {
            "createdAt": "2022-04-17T01:23:38.702Z",
            "name": "Beatrice Bahringer",
            "avatar": "https://cdn.fakercloud.com/avatars/andrewabogado_128.jpg",
            "id": "55"
        },
        {
            "createdAt": "2022-04-17T11:16:44.972Z",
            "name": "Melissa Klocko",
            "avatar": "https://cdn.fakercloud.com/avatars/ariil_128.jpg",
            "id": "56"
        },
        {
            "createdAt": "2022-04-17T10:21:18.699Z",
            "name": "Alonzo Heidenreich II",
            "avatar": "https://cdn.fakercloud.com/avatars/kevka_128.jpg",
            "id": "57"
        },
        {
            "createdAt": "2022-04-17T11:57:12.573Z",
            "name": "Felix Bashirian",
            "avatar": "https://cdn.fakercloud.com/avatars/bighanddesign_128.jpg",
            "id": "58"
        }
    ]
    return (
        <div>
            <MyNavBar />
            {/* <h1>This is IT turotial</h1> */}
            <Project />
            <MyFooter />


        </div>
    );
};

export default index;