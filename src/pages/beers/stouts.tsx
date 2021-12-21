import type { NextPage } from "next";
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Beer";

const StoutsBeerePage: NextPage = () => {
  const { data, error } = useBeerData('stouts')

  if (error) return <div>Failed to Loading...</div>
  if (!data) return <div>...Loading</div>

  return (
    <div>
      <h1>Beer</h1>
      <main>
        {data.map((beerData: Beer) => {
          const { id, price, name } = beerData;

          return (
            <div key={`stouts-beer-list-${id}`}>
              <h1>{price}</h1>
              <p>{name}</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default StoutsBeerPage;