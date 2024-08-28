import './pageNotFound.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Ooops...</p>
      <p className="error-description">We cannot find this page</p>
      <button className="try-something-button">
        Let’s try something different <span>&#10145;</span>
      </button>
    </div>
  );
};

export default NotFoundPage;
