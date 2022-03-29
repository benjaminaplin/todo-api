import { useEffect, useState } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import './App.css';

const fetchFilms = (context) => {
  console.log("🚀 ~ file: App.js ~ line 12 ~ fetchFilms ~ context", context)
  
  return fetch('https://swapi.dev/api/films')
    .then(res => res.json())
    .then(res=> res.results)
}


const queryClient = new QueryClient()

function App() {
  const [films, setFilms] = useState([])


 // Access the client
 const queryClient = useQueryClient()
 
 // Queries
 const query = useQuery('films', fetchFilms)
 console.log("🚀 ~ file: App.js ~ line 27 ~ App ~ query", query)

  query.isLoading && <div>...loading films</div>

  return (
    <div className="App">
      <div>{query.data?.map(film => (
         <div key={film.id}>{film.title}</div>)
      )}</div>
    </div>
  );
}
const appWrapper =  () =>{
  return  (<QueryClientProvider client={queryClient}>
  <App/>
  </QueryClientProvider>)};
export default appWrapper
