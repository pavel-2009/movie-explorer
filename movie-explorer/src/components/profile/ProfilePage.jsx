import { useMemo, useState } from 'react'
import avatarImage from '../../assets/images/avatar.svg'

const initialUser = {
  name: 'Алексей Иванов',
  email: 'alexey@movieexplorer.dev',
  phone: '+7 (999) 123-45-67',
  city: 'Москва',
  plan: 'Премиум ★',
  favoriteGenre: 'Научная фантастика',
  birthday: '1994-05-14',
  bio: 'Люблю смотреть фильмы с напряжённым сюжетом и возвращаться к любимым комедиям в выходные.',
}

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(initialUser)

  const profileSummary = useMemo(
    () => [
      { label: 'Подписка', value: formData.plan },
      { label: 'Любимый жанр', value: formData.favoriteGenre },
      { label: 'Город', value: formData.city },
    ],
    [formData.city, formData.favoriteGenre, formData.plan],
  )

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsEditing(false)
  }

  return (
    <main className="main-content profile-page" aria-labelledby="profile-title">
      <section className="profile-page__hero">
        <div className="profile-page__cover">
          <div className="profile-page__avatar-wrap">
            <img className="profile-page__avatar" src={avatarImage} alt="Аватар пользователя" />
          </div>
          <div className="profile-page__hero-copy">
            <span className="profile-page__eyebrow">Личный кабинет</span>
            <h1 id="profile-title" className="profile-page__title">{formData.name}</h1>
            <p className="profile-page__subtitle">Смотрите историю, управляйте подпиской и обновляйте данные профиля.</p>
          </div>
        </div>

        <div className="profile-page__summary-list" aria-label="Краткая информация профиля">
          {profileSummary.map((item) => (
            <div className="profile-page__summary-item" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-page__card" aria-label="Форма профиля">
        <div className="profile-page__card-head">
          <div>
            <p className="profile-page__section-kicker">Профиль</p>
            <h2>Общая информация</h2>
          </div>

          <button
            type="button"
            className="profile-page__edit-button"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            {isEditing ? 'Отменить' : 'Редактировать'}
          </button>
        </div>

        <form className="profile-page__form" onSubmit={handleSubmit}>
          <label className="profile-page__field">
            <span>Имя</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </label>

          <label className="profile-page__field">
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </label>

          <label className="profile-page__field">
            <span>Телефон</span>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </label>

          <label className="profile-page__field">
            <span>Город</span>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </label>

          <label className="profile-page__field">
            <span>Подписка</span>
            <input
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </label>

          <label className="profile-page__field">
            <span>Любимый жанр</span>
            <input
              name="favoriteGenre"
              value={formData.favoriteGenre}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </label>

          <label className="profile-page__field profile-page__field--wide">
            <span>Дата рождения</span>
            <input
              name="birthday"
              type="date"
              value={formData.birthday}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </label>

          <label className="profile-page__field profile-page__field--wide">
            <span>О себе</span>
            <textarea
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </label>

          {isEditing && (
            <div className="profile-page__actions">
              <button type="submit" className="profile-page__save-button">Сохранить</button>
            </div>
          )}
        </form>
      </section>
    </main>
  )
}
