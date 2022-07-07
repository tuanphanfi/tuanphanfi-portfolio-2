import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Index = () => {
    const [number, setNumber] = useState([])
    const [data, setData] = useState()

    const mockDb = [
        {
            "id": 1,
            "url": "https://lh3.google.com/u/0/d/15WIoVx98vHJGjUcDz9tbGIhtP0poLf_Q=w1920-h928-iv1",
            "name": "Sweet item",
            "price": "5"
        },
        {
            "id": 2,
            "url": "https://lh3.google.com/u/0/d/1Bkx5W5MasvTMA5wODv2VouX1HIifj9U9=w1262-h928-iv1",
            "name": "Sweet item",
            "price": "5"
        },
        {
            "id": 3,
            "url": "https://lh3.google.com/u/0/d/1QR4xxegiLXjWZ_AEOOF1CtzJe5dAVyNC=w1262-h928-iv1",
            "name": "Sweet item",
            "price": "5"
        },
        {
            "id": 4,
            "url": "https://cdn.tgdd.vn/2021/03/content/mocktail-la-gi-cac-loai-mocktail-phan-biet-mojito-cocktail-2-800x512.jpg",
            "name": "Mocktail",
            "price": "5"
        },
        {
            "id": 5,
            "url": "https://lh3.google.com/u/0/d/10BOTv2OjREJUWQ63SpeKfVqx1C61HoLv=w1262-h872-iv1",
            "name": "Mocktail",
            "price": "5"
        },
        {
            "id": 6,
            "url": "https://lh3.google.com/u/0/d/1LSo58oZZyBXnWTylmxArJKDdRSut8kXp=w1920-h872-iv1",
            "name": "Mocktail",
            "price": "5"
        }]

    const generateNumbs = () => {
        let myArr = []

        for (let i = 0; i < 10; i++) {
            myArr.push(i)
        }

        setNumber(myArr)
        console.log("🚀 number", number)
    }

    const url = 'https://62405d822aeb48a9af733b3e.mockapi.io/topics'
    const method = 'GET'
    const result = axios({
        method: method,
        url: url,
        data,
    });

    useEffect(() => {
        console.log("Just Once")
        console.log("Result", result)
    }, [])
    // useEffect(() => {
    //     axios.get(`https://62405d822aeb48a9af733b3e.mockapi.io/topics`)
    //         .then(res => {
    //             // const myData = res.data;
    //             // setData({ myData })
    //             setData(res.data)
    //             // console.log(res.data)
    //             console.log("🚀 ~ file: index.js ~ line 26 ~ useEffect ~ res.data", res.data)
    //             console.log("typeof", typeof res.data)
    //             // console.log(data)
    //             console.log("🚀 ~ file: index.js ~ line 29 ~ useEffect ~ data", data)
    //         })
    //         .catch(error => console.log(error));
    // }, [])

    return (
        <div className="container">
            <div className="ex1">
                <h1>Learning String</h1>
                <p></p>
            </div>
            <h1>Learning Loop</h1>
            <button onClick={generateNumbs}>Generate!</button>
            {number.map((item, index) => {
                return (
                    <h1>{item}</h1>
                )
            })}

            {number}
            <hr className="text-warning" />
            <h1>Test data: {data}</h1>

            <hr className="text-warning" />
            <h1>Mock db data: {typeof mockDb}</h1>
            {mockDb.map((item, index) => {
                return (
                    <p>{item.name}</p>
                )
            })}


        </div>
    );
};

export default Index;