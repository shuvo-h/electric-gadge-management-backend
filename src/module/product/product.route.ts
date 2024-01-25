import { productValidations } from './product.validation';
import express from 'express';
import { authCheck } from '../../middlewares/AuthCheck';
import { validateRequest } from '../../middlewares/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { ProductControllers } from './product.controller';

export const productRouter = express.Router();

productRouter.get(
  '/',
  authCheck(USER_ROLE.USER),
  ProductControllers.getProducts,
);

productRouter.post(
  '/product',
  authCheck(USER_ROLE.USER),
  validateRequest(productValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

productRouter.patch(
  '/product/:productId',
  authCheck(USER_ROLE.USER),
  validateRequest(productValidations.updateProductValidationSchema),
  ProductControllers.updateSingleProduct,
);
productRouter.delete(
  '/product/:productId',
  authCheck(USER_ROLE.USER),
  ProductControllers.deleteSingleProduct,
);