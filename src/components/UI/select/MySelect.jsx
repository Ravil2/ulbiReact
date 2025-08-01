import styles from './MySelect.module.css'

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div className={styles.select}>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.select}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
