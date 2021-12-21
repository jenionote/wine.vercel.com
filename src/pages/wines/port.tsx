import type { NextPage } from "next";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const PortWinePage: NextPage = () => {
  const { data, error } = useWineData('port')

  if (error) return <div>Failed to Loading...</div>
  if (!data) return <div>...Loading</div>

  return (
    <div>
      <h1>Wine</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id, wine, winery } = wineData;

          return (
            <div key={`port-wine-list-${id}`}>
              <h1>{wine}</h1>
              <p>{winery}</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default PortWinePage;




/* Next.js에서 ServerSideRendering을 위해서 데이터를 미리 불러오는 함수
export async function getServerSideProps() {
  데이터 불러오는 부분 복붙
  const { data, error } = useSWR('https://api.sampleapis.com/wines/port', fetcher);


    return { props: { data, error } }
}

export default WinePage; */