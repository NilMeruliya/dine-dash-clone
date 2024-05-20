import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FoodItems = () => {

    const category = useSelector((state) => state.category.category)
    console.log(category);

    const search = useSelector(state => state.search.search)

    console.log("search items", search);

  const handleToast = (name) => toast.success(`Added ${name} to the cart. `);
  
  return (
    <>
        <Toaster position="top-center" reverseOrder={false} />
   
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      
      {
        FoodData.filter((food) => {
            if(category === "All") {
               
                {/* return food.name */}

                return food.name.toLowerCase().includes(search.toLowerCase())
            } else {
                {/* return category === food.category */}

                return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
        }).map((ele, ind) => {
                return(  
                    <FoodCard 
                    key={ind}
                    id={ele.id}
                    foodName={ele.name}
                    srcImg={ele.img}
                    price={ele.price}
                    desc={ele.desc}
                    rating={ele.rating}
                    handleToast={handleToast}
                     />
                    
                )
            })
      }
      
    </div>
    </>
  )
}

export default FoodItems
