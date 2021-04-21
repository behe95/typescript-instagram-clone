import React from "react";

interface formValuesType{
    fullName: string;
    username: string;
    website: string;
    bio: string;
    email: string;
    phone: string;
    gender: string;
    isSuggestSimilarAccount: boolean;
}

interface actionType{
    type: string;
    payload: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
}

interface GenderFormPropsType{
    formValues: formValuesType;
    dispatch: React.Dispatch<actionType>;
}

export default function GenderForm(props: GenderFormPropsType){
    const {dispatch, formValues} = props;

    

    return (
        <div className="edit__profile__component__gender__form">
            <form className="gender__form">
                <div className="form-check">
                <input
                checked={formValues.gender === 'male' && true}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'gender', payload: e})}
                className="form-check-input" type="radio" name="gender" value="male" />
                <label className="form-check-label" htmlFor="male">
                    Male
                </label>
                </div>
                <div className="form-check">
                <input
                checked={formValues.gender === 'female' && true}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'gender', payload: e})}
                className="form-check-input" type="radio" name="gender" value="female" />
                <label className="form-check-label" htmlFor="female">
                    Female
                </label>
                </div>
                <div className="form-check">
                <input
                checked={formValues.gender === 'custom' && true}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'gender', payload: e})}
                className="form-check-input" type="radio" name="gender" value="custom" />
                <label className="form-check-label" htmlFor="custom">
                    Custom
                </label>
                </div>
                <div className="form-check">
                <input
                checked={formValues.gender === 'preferNotToSay' && true}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'gender', payload: e})}
                className="form-check-input" type="radio" name="gender" value="preferNotToSay" />
                <label className="form-check-label" htmlFor="preferNotToSay">
                    Prefer Not To Say
                </label>
                </div>
            </form>
        </div>
    )
}