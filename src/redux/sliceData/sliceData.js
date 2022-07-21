import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  settings: [],
  team: [],
  testimonials: [],
  collapses: [],
  blogs: [],
  welcomes: {},
  services: [],
  interiors: [],
  categoriesAddData: [],
  aboutweare: {},
  whatweoffers: [],
  servicelist: [],
  ourservices: {},
  servicesmarks : [],
  projectdiscover: [],
  projectlist: [],
  amenities: [],
  projectservice: [],
  projectsdetails: [],
  farours: [],
  fardetails: [],
  
}

export const sliceData = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    settingAddData: (state, action) => {
      state.settings = action.payload
    },
    teamAddData: (state, action) => {
      state.team = action.payload
    },
    testimonialAddData: (state, action) => {
      state.testimonials = action.payload
    },
    collapsesAddData: (state, action) => {
      state.collapses = action.payload
    },
    blogAddData: (state, action) => {
      state.blogs = action.payload
    },
    welcomeAddData: (state, action) => {
      state.welcomes = action.payload
    },
    serviceAddData: (state, action) => {
      state.services = action.payload
    },
    interiorsAddData: (state, action) => {
      state.interiors = action.payload
    },
    categoriesAddData: (state, action) => {
      state.categoriesAddData = action.payload
    },
    aboutweareData: (state, action) => {
      state.aboutweare = action.payload
    },
    whatweoffersData: (state, action) => {
      state.whatweoffers = action.payload
    },
    servicelistData: (state, action) => {
      state.servicelist = action.payload
    },
    ourservicesData: (state, action) => {
      state.ourservices = action.payload
    },
    servicesmarksData: (state, action) => {
      state.servicesmarks = action.payload
    },
    projectdiscoverData: (state, action) => {
      state.projectdiscover = action.payload
    },
    projectlistData: (state, action) => {
      state.projectlist = action.payload
    },
    amenitiesData: (state, action) => {
      state.amenities = action.payload
    },
    projectserviceData: (state, action) => {
      state.projectservice = action.payload
    },
    projectsdetailsData: (state, action) => {
      state.projectsdetails = action.payload
    },
    faroursData: (state, action) => {
      state.farours = action.payload
    },
    fardetailsData: (state, action) => {
      state.fardetails = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fardetailsData, faroursData, projectsdetailsData, projectserviceData, amenitiesData, projectlistData, projectdiscoverData, servicesmarksData, ourservicesData, servicelistData, whatweoffersData, aboutweareData, categoriesAddData, interiorsAddData, serviceAddData, settingAddData, teamAddData, testimonialAddData, collapsesAddData, blogAddData, welcomeAddData } = sliceData.actions

export default sliceData.reducer