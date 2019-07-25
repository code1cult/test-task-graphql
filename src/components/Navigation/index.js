import React from 'react';
import { Input, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem, FormHelperText, Divider } from '@material-ui/core';
import data from './data.json';

const Navigation = ({
    repo,
    onOrganizationSearch,
    license,
    stars
}) => (
        <header className="Navigation">
            <OrganizationSearch
                stars={stars}
                license={license}
                repo={repo}
                onOrganizationSearch={onOrganizationSearch}
            />
        </header>
    );

class OrganizationSearch extends React.Component {
    state = {
        repo: this.props.repo,
        license: this.props.license,
        stars: this.props.stars
    };

    onChange = event => {
        const { target: { value, name } } = event;
        this.setState({ [name]: value });
    };

    onSubmit = event => {
        const { onOrganizationSearch } = this.props;
        onOrganizationSearch(this.state);
        event.preventDefault();
    };


    render() {
        const { repo, license, stars } = this.state;
        const { onChange, onSubmit} = this;


        return (
            <>
                <form onSubmit={onSubmit}>
                    <Input
                        name={'repo'}
                        value={repo}
                        onChange={onChange}
                    />
                    <Button type="submit">
                        Search
                    </Button>
                </form>
                <FormHelperText>license type</FormHelperText>
                <Select
                    fullWidth
                    value={license}
                    onChange={onChange}
                    name={'license'}
                >
                    {data && data.license.map((value,i)=> 
                    <MenuItem key={i} value={value}>{value}</MenuItem>
                    )}
                </Select>
                <Divider />
                <FormHelperText>stars</FormHelperText>
                <RadioGroup aria-label="position" name="stars" value={stars} onChange={onChange} row>
                    
                {data && data.stars.map((value,i)=> 
                    <FormControlLabel
                        key={i}
                        value={value}
                        control={<Radio color="primary" />}
                        label={value}
                                    />
                 )}
                </RadioGroup>
                <Divider />



            </>
        );
    }
}

export default Navigation;
