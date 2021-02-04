import React, { useState, useEffect } from 'react'
import moment from 'moment'

const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

const Cocktails = () => {
  const [drink, setDrink] = useState([])

  const fetchDrinks = async () => {
    const response = await fetch(url)
    const drink = await response.json()
    setDrink(drink.drinks)
  }

  useEffect(() => {
    fetchDrinks()
  }, [])

  return (
    <>
      <h1 className="text-center text-4xl pt-10">CockTail App</h1>
      <div className="underline mx-auto mt-2 mb-4"></div>
      <section className="px-10 pt-5 pb-10">
        {drink.map((d) => {
          const {
            idDrink,
            strDrink,
            strCategory,
            strInstructions,
            strAlcoholic,
            strGlass,
            strDrinkThumb,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
            dateModified,
          } = d

          return (
            <div key={idDrink}>
              <div className="lg:w-9/12 lg:mx-auto lg:grid lg:grid-cols-2 lg:place-items-center 2xl:w-1/2">
                <div className="mb-5">
                  <h3 className="lg:text-4xl mb-2">
                    <span className="font-bold">Name:</span> {strDrink}
                  </h3>
                  <p className="lg:text-xl">
                    <span className="font-bold">Glass Type:</span> {strGlass}
                  </p>
                  <p className="lg:text-xl">
                    <span className="font-bold">Category:</span> {strCategory}
                  </p>
                  <p className="lg:text-xl">
                    <span className="font-bold">Alcoholic:</span> {strAlcoholic}
                  </p>
                </div>
                <div>
                  <img
                    src={strDrinkThumb}
                    alt={strDrink}
                    className="rounded-lg mb-10 lg:w-9/12 2xl:w-1/2"
                  />
                </div>
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:place-content-center lg:w-9/12 lg:mx-auto 2xl:w-1/2">
                <ul className="lg:mr-96">
                  <p className="font-bold lg:text-xl">Ingredients:</p>
                  <div className="underline mt-2 mb-4"></div>
                  <li>{strIngredient1}</li>
                  <li>{strIngredient2}</li>
                  <li>{strIngredient3}</li>
                  <li>{strIngredient4}</li>
                  <li>{strIngredient5}</li>
                  <li>{strIngredient6}</li>
                  <li>{strIngredient7}</li>
                  <li>{strIngredient8}</li>
                  <li>{strIngredient9}</li>
                  <li>{strIngredient10}</li>
                  <li>{strIngredient11}</li>
                  <li>{strIngredient12}</li>
                  <li>{strIngredient13}</li>
                  <li>{strIngredient14}</li>
                  <li>{strIngredient15}</li>
                </ul>

                <ul>
                  <p className="font-bold lg:text-xl">Quantity:</p>
                  <div className="underline mt-2 mb-4"></div>
                  <li>{strMeasure1}</li>
                  <li>{strMeasure2}</li>
                  <li>{strMeasure3}</li>
                  <li>{strMeasure4}</li>
                  <li>{strMeasure5}</li>
                  <li>{strMeasure6}</li>
                  <li>{strMeasure7}</li>
                  <li>{strMeasure8}</li>
                  <li>{strMeasure9}</li>
                  <li>{strMeasure10}</li>
                  <li>{strMeasure11}</li>
                  <li>{strMeasure12}</li>
                  <li>{strMeasure13}</li>
                  <li>{strMeasure14}</li>
                  <li>{strMeasure15}</li>
                </ul>
              </div>

              <div className="mt-5 lg:w-9/12 lg:mx-auto 2xl:w-1/2">
                <h2 className="font-bold my-2 lg:text-4xl">How to make:</h2>
                <p className="lg:text-xl">{strInstructions}</p>
                <p className="my-10">
                  <span className="font-bold">Date Modified:</span>{' '}
                  {moment(`${dateModified}`).format('MMM Do YYYY')}
                </p>
              </div>

              <div className="text-center">
                <h4 className="font-bold mb-2">Not Satisfied?</h4>
                <button
                  onClick={() => fetchDrinks()}
                  className="py-2 px-4 rounded-lg border border transition-all hover:bg-transparent hover:text-yellow-900"
                >
                  Get another drink
                </button>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Cocktails
