/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SaaSAPIContext } from "../saaSAPIContext";
import {
  Subscription,
  FulfillmentOperationsListSubscriptionsNextOptionalParams,
  FulfillmentOperationsListSubscriptionsOptionalParams,
  FulfillmentOperationsResolveOptionalParams,
  FulfillmentOperationsResolveResponse,
  FulfillmentOperationsListSubscriptionsResponse,
  FulfillmentOperationsGetSubscriptionOptionalParams,
  FulfillmentOperationsGetSubscriptionResponse,
  SubscriberPlan,
  FulfillmentOperationsUpdateSubscriptionOptionalParams,
  FulfillmentOperationsUpdateSubscriptionResponse,
  FulfillmentOperationsDeleteSubscriptionOptionalParams,
  FulfillmentOperationsDeleteSubscriptionResponse,
  FulfillmentOperationsListAvailablePlansOptionalParams,
  FulfillmentOperationsListAvailablePlansResponse,
  FulfillmentOperationsActivateSubscriptionOptionalParams,
  FulfillmentOperationsListSubscriptionsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a FulfillmentOperations. */
export class FulfillmentOperations {
  private readonly client: SaaSAPIContext;

  /**
   * Initialize a new instance of the class FulfillmentOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SaaSAPIContext) {
    this.client = client;
  }

  /**
   * Lists all the SaaS subscriptions for a publisher.
   * @param options The options parameters.
   */
  public listSubscriptions(
    options?: FulfillmentOperationsListSubscriptionsOptionalParams
  ): PagedAsyncIterableIterator<Subscription> {
    const iter = this.listSubscriptionsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listSubscriptionsPagingPage(options);
      }
    };
  }

  private async *listSubscriptionsPagingPage(
    options?: FulfillmentOperationsListSubscriptionsOptionalParams
  ): AsyncIterableIterator<Subscription[]> {
    let result = await this._listSubscriptions(options);
    yield result.subscriptions || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listSubscriptionsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.subscriptions || [];
    }
  }

  private async *listSubscriptionsPagingAll(
    options?: FulfillmentOperationsListSubscriptionsOptionalParams
  ): AsyncIterableIterator<Subscription> {
    for await (const page of this.listSubscriptionsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The resolve endpoint enables the publisher to resolve a marketplace token to a persistent resource
   * ID. The resource ID is the unique identifier for a SaaS subscription. When a user is redirected to a
   * partner's website, the URL contains a token in the query parameters. The partner is expected to use
   * this token and make a request to resolve it. The response contains the unique SaaS subscription ID,
   * name, offer ID, and plan for the resource. This token is valid for one hour only.
   * @param xMsMarketplaceToken The token query parameter in the URL when the user is redirected to the
   *                            SaaS partner's website from Azure (for example,  https://contoso.com/signup?token=..). Note, The URL
   *                            decodes the token value from the browser before using it.
   * @param options The options parameters.
   */
  resolve(
    xMsMarketplaceToken: string,
    options?: FulfillmentOperationsResolveOptionalParams
  ): Promise<FulfillmentOperationsResolveResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      xMsMarketplaceToken,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      resolveOperationSpec
    ) as Promise<FulfillmentOperationsResolveResponse>;
  }

  /**
   * Lists all the SaaS subscriptions for a publisher.
   * @param options The options parameters.
   */
  private _listSubscriptions(
    options?: FulfillmentOperationsListSubscriptionsOptionalParams
  ): Promise<FulfillmentOperationsListSubscriptionsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listSubscriptionsOperationSpec
    ) as Promise<FulfillmentOperationsListSubscriptionsResponse>;
  }

  /**
   * Gets the specified SaaS subscription. Use this call to get license information and plan information.
   * @param subscriptionId
   * @param options The options parameters.
   */
  getSubscription(
    subscriptionId: string,
    options?: FulfillmentOperationsGetSubscriptionOptionalParams
  ): Promise<FulfillmentOperationsGetSubscriptionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      subscriptionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getSubscriptionOperationSpec
    ) as Promise<FulfillmentOperationsGetSubscriptionResponse>;
  }

  /**
   * Use this call to update the plan, the user count (quantity), or both.
   * @param subscriptionId
   * @param body
   * @param options The options parameters.
   */
  updateSubscription(
    subscriptionId: string,
    body: SubscriberPlan,
    options?: FulfillmentOperationsUpdateSubscriptionOptionalParams
  ): Promise<FulfillmentOperationsUpdateSubscriptionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      subscriptionId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateSubscriptionOperationSpec
    ) as Promise<FulfillmentOperationsUpdateSubscriptionResponse>;
  }

  /**
   * Unsubscribe and delete the specified subscription.
   * @param subscriptionId
   * @param options The options parameters.
   */
  deleteSubscription(
    subscriptionId: string,
    options?: FulfillmentOperationsDeleteSubscriptionOptionalParams
  ): Promise<FulfillmentOperationsDeleteSubscriptionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      subscriptionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteSubscriptionOperationSpec
    ) as Promise<FulfillmentOperationsDeleteSubscriptionResponse>;
  }

  /**
   * Use this call to find out if there are any private or public offers for the current publisher.
   * @param subscriptionId
   * @param options The options parameters.
   */
  listAvailablePlans(
    subscriptionId: string,
    options?: FulfillmentOperationsListAvailablePlansOptionalParams
  ): Promise<FulfillmentOperationsListAvailablePlansResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      subscriptionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAvailablePlansOperationSpec
    ) as Promise<FulfillmentOperationsListAvailablePlansResponse>;
  }

  /**
   * Use this call to activate a subscription.
   * @param subscriptionId
   * @param body
   * @param options The options parameters.
   */
  activateSubscription(
    subscriptionId: string,
    body: SubscriberPlan,
    options?: FulfillmentOperationsActivateSubscriptionOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      subscriptionId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      activateSubscriptionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * ListSubscriptionsNext
   * @param nextLink The nextLink from the previous successful call to the ListSubscriptions method.
   * @param options The options parameters.
   */
  private _listSubscriptionsNext(
    nextLink: string,
    options?: FulfillmentOperationsListSubscriptionsNextOptionalParams
  ): Promise<FulfillmentOperationsListSubscriptionsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listSubscriptionsNextOperationSpec
    ) as Promise<FulfillmentOperationsListSubscriptionsNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const resolveOperationSpec: coreHttp.OperationSpec = {
  path: "/saas/subscriptions/resolve",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResolvedSubscription
    },
    400: {
      isError: true
    },
    403: {
      isError: true
    },
    404: {
      isError: true
    },
    500: {
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.correlationId,
    Parameters.xMsMarketplaceToken
  ],
  serializer
};
const listSubscriptionsOperationSpec: coreHttp.OperationSpec = {
  path: "/saas/subscriptions/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionsResponse
    },
    403: {
      isError: true
    },
    500: {
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.continuationToken],
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.correlationId
  ],
  serializer
};
const getSubscriptionOperationSpec: coreHttp.OperationSpec = {
  path: "/saas/subscriptions/{subscriptionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Subscription
    },
    403: {
      isError: true
    },
    404: {
      isError: true
    },
    500: {
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.correlationId
  ],
  serializer
};
const updateSubscriptionOperationSpec: coreHttp.OperationSpec = {
  path: "/saas/subscriptions/{subscriptionId}",
  httpMethod: "PATCH",
  responses: {
    202: {
      headersMapper: Mappers.FulfillmentOperationsUpdateSubscriptionHeaders
    },
    400: {
      isError: true
    },
    403: {
      isError: true
    },
    404: {
      isError: true
    },
    500: {
      isError: true
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [
    Parameters.requestId,
    Parameters.correlationId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const deleteSubscriptionOperationSpec: coreHttp.OperationSpec = {
  path: "/saas/subscriptions/{subscriptionId}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.FulfillmentOperationsDeleteSubscriptionHeaders
    },
    400: {
      isError: true
    },
    403: {
      isError: true
    },
    404: {
      isError: true
    },
    500: {
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.requestId, Parameters.correlationId],
  serializer
};
const listAvailablePlansOperationSpec: coreHttp.OperationSpec = {
  path: "/saas/subscriptions/{subscriptionId}/listAvailablePlans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionPlans
    },
    403: {
      isError: true
    },
    404: {
      isError: true
    },
    500: {
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.correlationId
  ],
  serializer
};
const activateSubscriptionOperationSpec: coreHttp.OperationSpec = {
  path: "/saas/subscriptions/{subscriptionId}/activate",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      isError: true
    },
    403: {
      isError: true
    },
    404: {
      isError: true
    },
    500: {
      isError: true
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [
    Parameters.requestId,
    Parameters.correlationId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const listSubscriptionsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionsResponse
    },
    403: {
      isError: true
    },
    500: {
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.continuationToken],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.correlationId
  ],
  serializer
};
