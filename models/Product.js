import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  originalPrice: {
    type: Number,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['tops', 'bottoms', 'dresses', 'outerwear', 'accessories', 'shoes', 'lingerie', 'activewear'],
  },
  subcategory: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  images: [{
    url: {
      type: String,
      required: true,
    },
    alt: String,
    isPrimary: {
      type: Boolean,
      default: false,
    },
  }],
  colors: [{
    name: String,
    hex: String,
    images: [String],
  }],
  sizes: [{
    size: {
      type: String,
      enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
  }],
  material: {
    type: String,
    required: true,
  },
  careInstructions: [String],
  tags: [String],
  featured: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    slug: {
      type: String,
      unique: true,
      required: true,
    },
  },
}, {
  timestamps: true,
});

// Create index for search functionality
ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });
ProductSchema.index({ category: 1, subcategory: 1 });
ProductSchema.index({ featured: 1 });
ProductSchema.index({ 'seo.slug': 1 });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);