import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
  Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import PhoneFormUpload from '../PhoneFormUpload';

const PhoneForm = ({ phone, onSubmit }) => {
  const [file, setFile] = useState();
  const onChangeFile = (avatar) => {
    setFile(avatar);
    console.log(file);
  };

  const onHandleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
      >
        <PhoneFormUpload
          avatar={phone?.avatarUrl}
          handleChangeFile={onChangeFile}
        />
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
        >
          <Formik
            initialValues={phone}
            enableReinitialize
            validationSchema={Yup.object().shape({
              name: Yup.string().typeError('name must be string!').max(50).required('name is required'),
              description: Yup.string().max(255).required('Description is required'),
              manufacturer: Yup.string().max(255).required('Manufacturer is required'),
              color: Yup.string().max(255).required('Color is required'),
              price: Yup.string().max(255).required('Price is required'),
              processor: Yup.string().max(255).required('Processor is required'),
              ram: Yup.string().max(255).required('Ram is required'),
              screen: Yup.string().max(255).required('Screen is required'),
            })}
            onSubmit={onHandleSubmit}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              // isSubmitting,
              touched,
              values
            }) => (
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Card>
                  {phone?.name ? (
                    <CardHeader
                      subheader="The information can be edited"
                      title="Detail"
                    />
                  ) : (
                    <CardHeader
                      title="Create new phone"
                    />
                  )}
                  <Divider />
                  <CardContent>
                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.name && errors.name)}
                          fullWidth
                          helperText={touched.name && errors.name}
                          label="name"
                          name="name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          value={values?.name || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.manufacturer && errors.manufacturer)}
                          fullWidth
                          helperText={touched.manufacturer && errors.manufacturer}
                          label="manufacturer"
                          name="manufacturer"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          value={values?.manufacturer || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.color && errors.color)}
                          fullWidth
                          helperText={touched.color && errors.color}
                          label="Color"
                          name="color"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          value={values?.color || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.price && errors.price)}
                          fullWidth
                          helperText={touched.price && errors.price}
                          label="price"
                          name="price"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="number"
                          value={values?.price || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.description && errors.description)}
                          fullWidth
                          helperText={touched.description && errors.description}
                          label="Description"
                          name="description"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          value={values?.description || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.screen && errors.screen)}
                          fullWidth
                          helperText={touched.screen && errors.screen}
                          label="Screen"
                          name="screen"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          value={values?.screen || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.processor && errors.processor)}
                          fullWidth
                          helperText={touched.processor && errors.processor}
                          label="Processor"
                          name="processor"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          value={values?.processor || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.ram && errors.ram)}
                          fullWidth
                          helperText={touched.ram && errors.ram}
                          label="Ram"
                          name="ram"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          value={values?.ram || ''}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 2
                    }}
                  >
                    <Button
                      color="primary"
                      // disabled={isSubmitting}
                      variant="contained"
                      type="submit"
                    >
                      Save details
                    </Button>
                  </Box>
                </Card>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

PhoneForm.propTypes = {
  phone: PropTypes.any,
  onSubmit: PropTypes.any
};
export default PhoneForm;
