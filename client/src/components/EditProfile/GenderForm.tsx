import React from "react";


export default function GenderForm(){
    return (
        <div className="edit__profile__component__gender__form">
            <form className="gender__form">
                <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="male" />
                <label className="form-check-label" htmlFor="male">
                    Male
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="female" />
                <label className="form-check-label" htmlFor="female">
                    Female
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="custom" />
                <label className="form-check-label" htmlFor="custom">
                    Custom
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="preferNotToSay" />
                <label className="form-check-label" htmlFor="preferNotToSay">
                    Prefer Not To Say
                </label>
                </div>
            </form>
        </div>
    )
}