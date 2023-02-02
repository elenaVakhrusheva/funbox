import React, { useState } from "react";
import s from "./style.module.css";
import cat from "./cat.png"
// import food from "../../food.json"


const FoodItem = ({ food = [], item/* , text, setText, description */ }) => {
  let description = <div>Чего сидишь? Порадуй котэ, <a href="#">купи.</a></div>;
  const [text, setText] = useState(description);
  return (
    <>
      <div className={s.card__wrapp}
        key={food.id}      
      >
        <div className={s.wrapper} 
          onMouseEnter={() => setText(food.subscrible)}
          onMouseLeave={() => setText(description)}>

          <div className={s.border}>
            <div className={s.foodItem}>
              <div className={s.description}>
                <span className={s.titleFood}>{food.title}</span>
                <h2 className={s.nameBrand}>
                  {food.nameBrand} <br /><span className={s.taste}>{food.taste}</span>
                </h2>
                <p className={s.portion}>{food.portion}</p>
                <p className={s.present}>{food.present}</p>
                <p className={s.present}>{food.presentSubscrible}</p>
                <div className={s.weight}>
                  {food.weight}
                  <span className={s.weightUnit}>кг</span>
                </div>
              </div>
            </div>
          </div>
          <img src={cat} className={s.img} alt="cat" />
        </div>

        <div className={s.subscrible}>
          <div>{text}</div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;