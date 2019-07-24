import React from 'react';
import { Input, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem, FormHelperText, Divider } from '@material-ui/core';;
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
        const { target: { value } } = event;
        this.setState({ repo: value });
    };

    onSubmit = event => {
        this.props.onOrganizationSearch(this.state);
        event.preventDefault();
    };

    handleChange = event => {
        const { target: { value } } = event;
        this.setState({ license: value });
    };

    starsChange = event => {
        const { target: { value } } = event;
        this.setState({ stars: value });
    };

    render() {
        const { repo, license, stars } = this.state;
        const { onChange, onSubmit, handleChange, starsChange } = this;


        return (
            <>
                <form onSubmit={onSubmit}>
                    <Input
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
                    onChange={handleChange}
                >
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={'afl-3.0'}>afl-3.0</MenuItem>
                    <MenuItem value={'apache-2.0'}>apache-2.0</MenuItem>
                    <MenuItem value={'artistic-2.0'}>artistic-2.0</MenuItem>
                    <MenuItem value={'cc'}>cc</MenuItem>
                    <MenuItem value={'mit'}>mit</MenuItem>
                </Select>
                <Divider />
                <FormHelperText>stars</FormHelperText>
                <RadioGroup aria-label="position" name="position" value={stars} onChange={starsChange} row>
                    <FormControlLabel
                        value="10"
                        control={<Radio color="primary" />}
                        label="10"
                    />
                    <FormControlLabel
                        value="100"
                        control={<Radio color="primary" />}
                        label="100"
                    />
                    <FormControlLabel
                        value="1000"
                        control={<Radio color="primary" />}
                        label="1000"
                    />
                </RadioGroup>
                <Divider />



            </>
        );
    }
}

export default Navigation;
