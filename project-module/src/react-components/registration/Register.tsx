

export const RegisterApp = () => {
    return (
        <div className="register_panel">
            <div className="register_wrapper">
                <svg className="register_panel-icon" width="30" height="30">
                    <use href="./public/img/file.svg#market-icon"></use>
                </svg>
                <h1 className="register_panel-title">Welcome Back</h1>
                <p className="register_panel-description">Sign in to your account to continue shopping</p>
            </div>
            <form className="register_form">
                <div>
                    <span className="register_form-title">Email</span>
                <label className="register_form-label">
                <svg width="20" height="20"><use href="./public/img/file.svg#email-icon"></use></svg>
                <input className="register_form-input" placeholder="your@example.com"></input>
            </label>
                </div>
                <div>
                    <span className="register_form-title">Password</span>
                <label className="register_form-label">
                <svg width="20" height="20"><use xlinkHref="./public/img/file.svg#lock-icon"></use></svg>
                <input className="register_form-input" placeholder="&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;"></input>
            </label>
                </div>
            
            </form>
        </div>
    )
}