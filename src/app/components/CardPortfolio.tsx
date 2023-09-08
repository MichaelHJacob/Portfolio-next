import Image from 'next/image'
import um from '../../../public/albums/Screen-Churras01.png'
import dois from '../../../public/albums/Screen-Churras02.png';
import tres from '../../../public/albums/Screen-Churras03.png';
import quatro from '../../../public/albums/Screen-Churras04.png';
import cinco from '../../../public/albums/Screen-Churras05.png';
import seis from '../../../public/albums/Screen-Churras06.png';


const relogio = [
  <iframe
    src="https://michaelhjacob.github.io/relogio-analogico/"
    title="Relógio Analógico"
    width="100%"
    className="min-h-[100px] h-[32svh] max-h-[290px] landscape:lg:h-[24svh] landscape:2xl:max-h-72 portrait:h-[63vw] "
  ></iframe>,

  <iframe
    src="https://michaelhjacob.github.io/relogio-analogico/"
    title="Relógio Analógico"
    className="w-[170%] min-h-[170px] h-[55svh] max-h-[493px] portrait:h-[107vw] landscape:lg:h-[41svh] landscape:2xl:max-h-[450px]"
  ></iframe>,
];

const imgChuras = [
  <Image src={um} alt="Captura de tela do Churrascômetro" className="object-contain w-full"/>,
  <Image src={dois} alt="Captura de tela do Churrascômetro" className="object-contain w-full"/>,
  <Image src={tres} alt="Captura de tela do Churrascômetro" className="object-contain w-full"/>,
  <Image src={quatro} alt="Captura de tela do Churrascômetro" className="object-contain w-full"/>,
  <Image src={cinco} alt="Captura de tela do Churrascômetro" className="object-contain w-full"/>,
  <Image src={seis} alt="Captura de tela do Churrascômetro" className="object-contain w-full"/>,
];

const cards = [
  {
    title: "Web App Churrascômetro",

    info: <><h3 className="text-lg font-light py-1">Projeto Integrador Senac</h3><p className="py-1">O site calcula uma quantidade ideal de Carne e bebidas com base na quantidade Adultos, Crianças e Duração</p><span className="text-xs font-light py-1">Participaram do projeto:<br/></span> <p className="text-sm py-1">Michael Henrique Jacob; Murilo Henrique Nellis;  Mariana de Freitas Azevedo Alencar; Misael Oliveira Soares; Natalia Romo; Paulo Henrique de Oliveira</p></> ,
    conteúdo: imgChuras,
    link: "https://michaelhjacob.github.io/Churrascometro/"
  },
  {
    title: "Relógio Analógico",
    info:<p>Um simple projeto criado como o intuito de utilizar a propriedade transforme com JavaScript</p>,
    conteúdo: relogio,
    link: "https://michaelhjacob.github.io/relogio-analogico/"
  },
];


export default cards;
