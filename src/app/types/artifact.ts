// types/artifact.ts
export interface Artifact {
  id: number;
  collectionNumber: string;
  accessionNumber: string;
  collectionDate: string;
  contributorName: string;
  objectType: string;
  objectHead: string;
  description: string;
  measurement: string;
  images: string[];
  galleryNumber: string;
  foundPlace: string;
  category: string;
  accessLevel: string;
  additionalInfo: string;
}