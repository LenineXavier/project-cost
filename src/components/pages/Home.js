import styles from './Home.module.css'
import savings from '../../images/savings.svg'
import { LinkButton } from '../layout/LinkButton'

export function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao<span>Costs</span></h1>
            <p>Comece a gereenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text ="Criar Projeto"/>
            <img src={savings} alt="Homem montado num porquinho cofre, guardando uma moeda com um simnolode de cifrão."/>
        </section>
    )
        
}