import React, { useContext, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import './DataCollection.scss';
import Select from 'react-select';
import regionOptions from './data';
import axios from 'axios';
import { AppContext } from '../../Context/RoutesContext';

const DataCollection = () => {

  const{setDashboardRoute} = useContext(AppContext)

  const [formData, setFormData] = useState({
    CurrAgeGroup: '',
    Region: '',
    PlaceofResidence: '', 
    EducationLevel: '',
    SexofHouseholdHead: '',
    AgeofHouseholdHead: '',
    WealthIndex: '',
    Religion: '',
    CurrentMaritalStatus: '',
    FrequencyofWatchingTv: '',
    FrequencyofListeningtoRadio: '',
    FrequencyofUseofInternet: '',
    DistanceToTheNearestHealthFacility: '',

  });

  const handleSelect = (name, selectedOption) => {

    setFormData({
      ...formData,
      [name]: selectedOption.value,
    })

  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }

  function getOptionLabel(value, options, defaultPlaceholder) {
    if (!value) {
      return defaultPlaceholder;
    }
    const option = options.find(opt => opt.value === value);
    return option ? option.label : null;
  }


  const renameKeys = (obj) => {
    const keyMap = {
      AgeofHouseholdHead: "Head age",
      CurrAgeGroup: "CurrAgeGroup",
      CurrentMaritalStatus: "Current marital_status",
      DistanceToTheNearestHealthFacility: "Distance to health",
      EducationLevel: "Education level",
      FrequencyofListeningtoRadio: "Freq. of listening to radio",
      FrequencyofUseofInternet: "Freq. use internet",
      FrequencyofWatchingTv: "Freq. of watching TV",
      PlaceofResidence: "Place of Residence",
      Region: "Region",
      Religion: "Religion",
      SexofHouseholdHead: "Head sex",
      WealthIndex: "wealth index",
    };
  
    return Object.keys(obj).reduce((acc, key) => {
      acc[keyMap[key]] = obj[key];
      return acc;
    }, {});
  };


const formattedData = renameKeys(formData);
console.log(formattedData);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/predict/', formattedData, {
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });

    setDashboardRoute('feedback')
  };



  return (
<div className='data-collection-form'>

<span className='form-title'><h1>Data Collection</h1></span> 

    <MDBContainer >

      <MDBRow className="">
        <MDBCol md="4">
          <form onSubmit={handleSubmit} className='form'>

        <div className='category-1'>
            <span className='category-1-title'>Social Demographic Factors</span>
            <Select
              className="mb-4"
              placeholder={getOptionLabel(formData.CurrAgeGroup, [
                { value: '1', label: '15-19' },
                { value: '2', label: '20-24' },
                { value: '3', label: '25-29' },
                { value: '4', label: '30-34' },
                { value: '5', label: '35-39' },
                { value: '6', label: '40-44' },
                { value: '7', label: '45-49' },
              ], "Current Age Group")}
              name='CurrAgeGroup'
              value={formData.CurrAgeGroup}
              onChange={(selectedOption) => handleSelect('CurrAgeGroup', selectedOption)}
              options={[
                { value: '1', label: '15-19' },
                { value: '2', label: '20-24' },
                { value: '3', label: '25-29' },
                { value: '4', label: '30-34' },
                { value: '5', label: '35-39' },
                { value: '6', label: '40-44' },
                { value: '7', label: '45-49' },
              ]}
              
            />
            <Select
              className="mb-4"
              placeholder={getOptionLabel(formData.Region, regionOptions, "Region")}
              name='Region'
              value={formData.Region}
              onChange={(selectedOption) => handleSelect('Region', selectedOption)}
              options={regionOptions}
            />

            <Select
              className="mb-4"
              placeholder={getOptionLabel(formData.PlaceofResidence, [
                { value: '1', label: 'Urban' },
                { value: '2', label: 'Rural' },
              ], "Place of Residence")}
              name='PlaceofResidence'
              value={formData.PlaceofResidence}
              onChange={(selectedOption) => handleSelect('PlaceofResidence', selectedOption)}
              options={[
                { value: '1', label: 'Urban' },
                { value: '2', label: 'Rural' },
              ]}
            />

              <Select
              className="mb-4"
              placeholder={getOptionLabel(formData.EducationLevel, [
                { value: '0', label: 'No Education' },
                { value: '1', label: 'Primary Level' },
                { value: '2', label: 'Secondary Level' },
                { value: '3', label: 'Higher Level' },
              ], "Education Level")}
              name='EducationLevel'
              value={formData.EducationLevel}
              onChange={(selectedOption) => handleSelect('EducationLevel', selectedOption)}
              options={[
                { value: '0', label: 'No Education' },
                { value: '1', label: 'Primary Level' },
                { value: '2', label: 'Secondary Level' },
                { value: '3', label: 'Higher Level' },
              ]}
            />
              <Select
              className="mb-4"
              placeholder={getOptionLabel(formData.SexofHouseholdHead, [
                { value: '1', label: 'Male' },
                { value: '2', label: 'Female' },
              ], "Sex of Household Head")}
              name='SexofHouseholdHead'
              value={formData.SexofHouseholdHead}
              onChange={(selectedOption) => handleSelect('SexofHouseholdHead', selectedOption)}
              options={[
                { value: '1', label: 'Male' },
                { value: '2', label: 'Female' },
              ]}
            />
            
            <MDBInput
            className='mb-4'
              label="Age of Household Head"
              type="textarea"
              name="AgeofHouseholdHead"
              value={formData.AgeofHouseholdHead}
              onChange={handleChange}
              required
            />

              <Select
              className="mb-4"
              placeholder={getOptionLabel(formData.WealthIndex, [
                { value: '1', label: 'Poorest Level' },
                { value: '2', label: 'Poorer level' },
                { value: '3', label: 'Middle level' },
                { value: '2', label: 'Richer' },
              ], "Wealth Index")}
              name='WealthIndex'
              value={formData.WealthIndex}
              onChange={(selectedOption) => handleSelect('WealthIndex', selectedOption)}
              options={[
                { value: '1', label: 'Poorest Level' },
                { value: '2', label: 'Poorer level' },
                { value: '3', label: 'Middle level' },
                { value: '2', label: 'Richer' },
              ]}
            />

            <Select
              className="mb-4"
              placeholder={getOptionLabel(formData.Religion, [
                { value: '1', label: 'Protestant' },
                { value: '2', label: 'Evangelical Churches' },
                { value: '3', label: 'Africa Institutical Churches' },
              ], "Religion")}
              name='Religion'
              value={formData.Religion}
              onChange={(selectedOption) => handleSelect('Religion', selectedOption)}
              options={[
                { value: '1', label: 'Protestant' },
                { value: '2', label: 'Evangelical Churches' },
                { value: '3', label: 'Africa Institutical Churches' },
              ]}
            />
            <Select
                className="mb-4"
                placeholder={getOptionLabel(formData.CurrentMaritalStatus, [
                  { value: '0', label: 'Never in Union' },
                  { value: '1', label: 'Married' },
                  { value: '2', label: 'Living with partner' },
                  { value: '3', label: 'Widowed' },
                  { value: '4', label: 'Divorced'},
                  { value: '5', label: 'No longer living togther/ Separated' },
                ], "Current Marital Status")}
                name='CurrentMaritalStatus'
                value={formData.CurrentMaritalStatus}
                onChange={(selectedOption) => handleSelect('CurrentMaritalStatus', selectedOption)}
                options={[
                  { value: '0', label: 'Never in Union' },
                  { value: '1', label: 'Married' },
                  { value: '2', label: 'Living with partner' },
                  { value: '3', label: 'Widowed' },
                  { value: '4', label: 'Divorced'},
                  { value: '5', label: 'No longer living togther/ Separated' },
                ]}
            />
        </div>

        <div>
            <div className='category-2'>

            <span className='category-2-title'>Awareness to MNCH</span>
            <Select
                className="mb-4"
                placeholder={getOptionLabel(formData.FrequencyofWatchingTv, [
                  { value: '0', label: 'Not at all' },
                  { value: '1', label: 'less than once in a Week' },
                  { value: '2', label: 'Atleast once in a week' },
                ], "Frequency of Watching Tv")}
                name='FrequencyofWatchingTv'
                value={formData.FrequencyofWatchingTv}
                onChange={(selectedOption) => handleSelect('FrequencyofWatchingTv', selectedOption)}
                options={[
                  { value: '0', label: 'Not at all' },
                  { value: '1', label: 'less than once in a Week' },
                  { value: '2', label: 'Atleast once in a week' },
                ]}
            />
            <Select
                className="mb-4"
                placeholder={getOptionLabel(formData.FrequencyofListeningtoRadio, [
                  { value: '0', label: 'Not at all' },
                  { value: '1', label: 'less than once in a Week' },
                  { value: '2', label: 'Atleast once in a week' },
                ], "Frequency of Listening to Radio")}
                name='FrequencyofListeningtoRadio'
                value={formData.FrequencyofListeningtoRadio}
                onChange={(selectedOption) => handleSelect('FrequencyofListeningtoRadio', selectedOption)}
                options={[
                  { value: '0', label: 'Not at all' },
                  { value: '1', label: 'less than once in a Week' },
                  { value: '2', label: 'Atleast once in a week' },
                ]}
            />

            <Select
                className="mb-4"
                placeholder={getOptionLabel(formData.FrequencyofUseofInternet, [
                  { value: '0', label: 'Never Used' },
                  { value: '1', label: 'yes' },
                  { value: '2', label: 'Yes, before last 12 months ' },
                ], "Frequency of Use of Internet")}
                name='FrequencyofUseofInternet'
                value={formData.FrequencyofUseofInternet}
                onChange={(selectedOption) => handleSelect('FrequencyofUseofInternet', selectedOption)}
                options={[
                  { value: '0', label: 'Never Used' },
                  { value: '1', label: 'yes' },
                  { value: '2', label: 'Yes, before last 12 months ' },
                ]}
            />

           
        </div>

        <div className='category-3'>

            <span className='category-3-title'>Health Facility Access</span>

            <Select
                className="mb-4"
                placeholder={getOptionLabel(formData.DistanceToTheNearestHealthFacility, [
                  { value: '1', label: 'Big problem' },
                  { value: '2', label: 'Not a big problem' },
                ], "Distance To The Nearest Health Facility")}
                name='DistanceToTheNearestHealthFacility'
                value={formData.DistanceToTheNearestHealthFacility}
                onChange={(selectedOption) => handleSelect('DistanceToTheNearestHealthFacility', selectedOption)}
                options={[
                  { value: '1', label: 'Big problem' },
                  { value: '2', label: 'Not a big problem' },
                ]}
            />

            </div>

        </div>

       
        <div className="text-center">
              <MDBBtn type="submit" onClick={handleSubmit}>Submit</MDBBtn>
            </div>
         </form>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
    
</div>
   
  );
};

export default DataCollection;
