import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

const AppWrapper = styled.div`
  background-color: var(--grayDark)
`
function Home() {
  const [dadosInicias, setDadosIniciais] = useState([]);
  // const errorMessage = (error) => {
  //   return (<div style={{ color: 'white', border: 'solid 2px', position:'inherit', width: '200px', height: '100px'}}>{error}</div>)
  // }
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);

        
        // switch(categoriasComVideos){
        //   case 404:
        //     return errorMessage(categoriasComVideos.status);
        // }
    })
  },[]);

  return (
    <PageDefault paddingAll={0}>
      {dadosInicias.lenght === 0 && (<div>Loading...</div>)}

      {dadosInicias.map((categoria, indice) => {
        if(indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosInicias[0].videos[1].titulo}
                url={dadosInicias[0].videos[1].url}
                videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem afinal? Descubra com a Vanessa!"}
              />

              <Carousel 
                ignoreFirstVideo
                category={dadosInicias[0]}
              />
            </div>
          );
        };

        return (
          <Carousel 
            key={categoria.id}
            category={categoria}
          />
        );
      })};
    
    </PageDefault>
  );
}

export default Home;
