import React, { useState } from "react";
import s from "./style.module.css";
import cat from "./cat.png"

const FoodItem = ({ food = [], item, avai }) => {

  let description = <div>Чего сидишь? Порадуй котэ, <a href="/#" className={s.link} >купи.</a></div>;
  let unavailableText = <div className={s.unavailableText}>Печалька, с курой закончился.</div>

  const [text, setText] = useState(description);
  const [isActive, setActive] = useState("false");

/*   const handleClick = () => {
    setActive(!isActive);
    setText(food.subscrible); 
  }; */
 
  const handleClick = () => {
   /* if (avai !== false) {
      setActive(!isActive);
      setText(food.subscrible);
      console.log("если истина")
    } else {
     //if (avai !== true){
      // setActive(isActive);
      //setText(unavailableText);
      console.log("это ложь available")
    }
 */
    if (avai === false) { console.log("это ложь ") } else { console.log("это истина ") }
  };
  
 /*

 если (нет в наличии) => подставить unavailableText
 если (в наличии) => подставить description
 */

  

  return (
    <>
      <div className={s.card__wrapp} key={food.id}>
        <div className={s.wrapper} onClick={handleClick} /* unavailableItem={unavailableItem} */>
          <div className={isActive ? s.border : s.itemActive} >
            <div className={s.foodItem}>
              <div className={s.description}>
                <span className={s.titleFood}>{food.title}</span>
                <h2 className={s.nameBrand}>
                  {food.nameBrand} <br /><span className={s.taste}>{food.taste}</span>
                </h2>
                <p className={s.portion}>{food.portion}</p>
                <p className={s.present}>{food.present}</p>
                <p className={s.present}>{food.presentSubscrible}</p>
              </div>
            </div>
          </div>
          <div className={isActive ? s.weight : s.weightActive}>
            {food.weight}
            <span className={s.weightUnit}>кг</span>
          </div>
          <img src={cat} className={s.img} alt="cat" />
        </div>

        <div className={s.subscrible} >
           {text} 
        </div>
      </div>
    </>
  );
};

export default FoodItem;
