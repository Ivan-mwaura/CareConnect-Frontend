import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import './DataCollection.scss';
import Select from 'react-select';

const DataCollection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {

  };

  const handleSubmit = (e) => {

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
            <MDBInput
            className='mb-4 w-50'
              label="Region"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <MDBInput
                className='mb-4'
              label="Occupation"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <MDBInput
            className='mb-4'
              label="HouseHold Number"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <MDBInput
            className='mb-4'
              label="Age of Household Head"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            
            <Select
              className="mb-4"
              placeholder="Age Group"
              value={formData.selectOption}
              onChange={handleChange}
              options={[
                { value: '18 -25', label: '18 - 25' },
                { value: '25 - 35', label: '25 - 35' },
                { value: '35 - 25', label: '35 - 45' },
              ]}
            />

            <Select
                className="mb-4"
                placeholder="Education Level"
                value={formData.selectOption}
                onChange={handleChange}
                options={[
                  { value: 'Primary', label: 'Primary' },
                  { value: 'Secondary', label: 'Secondary' },
                  { value: 'Tertiary', label: 'Tertiary' },
                ]}
            />

            <Select
                className="mb-4"
                placeholder="Marital Status"
                value={formData.selectOption}
                onChange={handleChange}
                options={[
                  { value: 'Single', label: 'Single' },
                  { value: 'Married', label: 'Married' },
                  { value: 'Divorced', label: 'Divorced' },
                ]}
            />
            <Select
                className="mb-4"
                placeholder="Birth Order"
                value={formData.selectOption}
                onChange={handleChange}
                options={[
                  { value: '1', label: 'First born' },
                  { value: '2', label: 'Second Born' },
                  { value: '3', label: 'Third born' },
                ]}
            />
        </div>

        <div>
            <div className='category-2'>

            <span className='category-2-title'>Awareness to MNCH</span>
            <Select
                className="mb-4"
                placeholder="Ever heard of MNCH? through radio or  TV"
                value={formData.selectOption}
                onChange={handleChange}
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
            />

           
        </div>

        <div className='category-3'>

            <span className='category-3-title'>Health Facility Access</span>
                <MDBInput
                    className='mb-4 '
                    label='Distance to the nearest health facility'
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

        </div>

       
        <div className="text-center">
              <MDBBtn type="submit">Submit</MDBBtn>
            </div>
         </form>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
    
</div>
   
  );
};

export default DataCollection;
