import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: "xegm6hjc", // Replace with your project ID
  dataset: "production", // Or your dataset name
  apiVersion: "2024-01-04", // Today's date or latest API version
  useCdn: false, // Disable CDN for real-time updates
  token:
    "skCZ5oUJakq4o46enCxETotxGCDm04XE519HhxtXd0O6WiMUROFBi6OUs2G38XIVQJi3AvbgiiIwl2J9MGh7CAhCqpqjdUK3NxBIseZwjVdv2C0FDyVLsNBWXVkqyffiQEhe2nQEc0jzp9LcvezHg98d8xfedzVoKUlo2KTXo6izUXM3Mx4j",
});

export default client;
