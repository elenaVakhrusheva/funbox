import React from "react";
import s from "./style.module.css";
//import cat from "./cat.png"
import FoodItem from "../FoodItem/FoodItem";


const FoodList = () => {
  const data = [
    {
      "id": 1,
      "title": "Сказочное заморское яство",
      "nameBrand": "Нямушка",
      "taste": "с фуа-гра",
      "portion": "10 порций",
      "present": "мышь в подарок",
      "presentSubscrible": " ",
      "image": "",
      "weight": "0,5",
      "subscrible": "Это всего лишь паштет из печени утки или гуся"
    },
    {
      "id": 2,
      "title": "Сказочное заморское яство",
      "nameBrand": "Нямушка",
      "taste": "с рыбой",
      "portion": "40 порций",
      "present": "2 мыши в подарок",
      "presentSubscrible": " ",
      "image": "../img/cat.png",
      "weight": "2",
      "subscrible": "Головы щучьи с чесноком да свежайшая сёмгушка."
    },
    {
      "id": 3,
      "title": "Сказочное заморское яство",
      "nameBrand": "Нямушка",
      "taste": "с курой",
      "portion": "100 порций",
      "present": "5 мышей в подарок",
      "presentSubscrible": "заказчик доволен",
      "image": "./public/img/cat.png",
      "weight": "1",
      "subscrible": "Влажные корма с курицей из натурального сырья"
    }
  ]
  

  
/*   const handleClick = event => {
    console.log(event.currentTarget.id);
  }; */

  return (
    <>
      <div className="cat_food__container">
        <div className="container">
          <h1>Ты сегодня покормил кота?</h1>
          <div className={s.foodList}>
           {data?.map((food, item) => (
             
                <FoodItem  
                  /* text={text}
                  setText={setText}
               description={description}  */
                  food={food}
                  item={item}
                  
               />
               
              
            ))} 
          </div>
         {/*  <button id="my-btn" onClick={handleClick}>
            Click 1
          </button>
          <button id="my-btn2" onClick={handleClick}>
            Click 2
          </button>
          <button id="my-btn3" onClick={handleClick}>
            Click 3
          </button> */}
        </div>
      </div>
    </>
  );
};

export default FoodList;