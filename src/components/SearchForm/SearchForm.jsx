import style from "./SearchForm.module.css";

const SearchForm = ({ handleSubmit }) => {
  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search movies"
          className={style.input}
        />
        <button type="submit" className={style.btn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
