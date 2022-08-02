import type {NextPage} from 'next'
import s from '../styles/request.module.scss'
import {useForm} from "react-hook-form";
import {useState} from "react";

/**
 * Страница с формой завяки на игру
 *
 * @constructor
 */
const OnlineRequestPage: NextPage = () => {
    return (
        <div className={s.pageContainer}>
            <RequestForm/>
        </div>
    )
}

export default OnlineRequestPage

const msgOk = 'Спасибо, что присоединились к нашему сообществу. До встречи на игре!'
const msgError = `Произошла ошибка при отправке заявки:( <br/> Пожалуйста отправьте самостоятельно заявку на почту <u>gwent-game@yandex.ru</u> с указание имени и контактов для обратной связи.`

/**
 * Форма заявки
 *
 * @constructor
 */
export const RequestForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [disableSbmt, setDisableSbmt] = useState<boolean>(false);
    const [result, setResult] = useState<boolean>(null);

    const onSubmit = (data: any) => {
        setDisableSbmt(true)
        fetch('/api/sendMail', {method: 'POST', body: JSON.stringify(data)}).then(res => res.json()).then(res => {
            console.log(res)
            if (res.status === 'ok') {
                setResult(true)
            } else {
                console.log(res)
                setResult(false)
            }
        }).catch(error => {
            console.log(error)
            setResult(false)
        })
        setDisableSbmt(false)
    }

    return (
        <div className={s.formHolder}>
            <h1>Оставить заявку</h1>
            {result == null ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <input {...register("name", {required: true})} placeholder="Имя" tabIndex={1}/>
                            {errors.name && <span>Обязательно для заполнения</span>}
                        </div>
                        <div>
                            <input {...register("login", {required: true})} placeholder="Ник" tabIndex={2}/>
                            {errors.nickName && <span>Обязательно для заполнения</span>}
                        </div>
                        <div>
                            <input {...register("phone", {required: true})} placeholder="Телефон" tabIndex={3}/>
                            {errors.phone && <span>Обязательно для заполнения</span>}
                        </div>
                        <div>
                            <input {...register("email", {required: true})} placeholder="E-mail" tabIndex={4}/>
                            {errors.email && <span>Обязательно для заполнения</span>}
                        </div>
                    </div>
                    <input type="submit" value="" disabled={disableSbmt} tabIndex={5}/>
                </form>
                : <h2 className={result ? s.successText : s.errorText} dangerouslySetInnerHTML={{__html: result ? msgOk : msgError}}></h2>
            }
        </div>
    )
}
