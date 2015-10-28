<?php

/*
 * This file is part of the sententiaregum application.
 *
 * Sententiaregum is a social network based on Symfony2 and BackboneJS/ReactJS
 *
 * @copyright (c) 2015 Sententiaregum
 * Please check out the license file in the document root of this application
 */

namespace AppBundle\Model\User\Registration\Activation;

use AppBundle\Model\User\User;

/**
 * Provider that checks whether the activation attempt is expired.
 *
 * @author Maximilian Bosch <maximilian.bosch.27@gmail.com>
 */
interface ExpiredActivationProviderInterface
{
    /**
     * Checks if the activation is expired.
     *
     * @param User $user
     *
     * @return bool
     */
    public function checkApprovalByUser(User $user);

    /**
     * Attaches a new approval at the provider.
     *
     * @param string $activationKey
     */
    public function attachNewApproval($activationKey);
}
