
import illustrationImg from '../Assets/images/illustration.svg'
import logoImg from '../Assets/images/logo.svg'
import googleIconImg from '../Assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
    return (



        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input type="text"
                            placeholder='Nome da sala' />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <a href="#">Clique aqui</a></p>
                </div>
            </main>
        </div>

    )
}

